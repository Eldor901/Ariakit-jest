import { matchSorter } from "match-sorter";
import { useDeferredValue, useMemo } from "react";
import list from "./list";
import {
  Combobox,
  ComboboxItem,
  ComboboxList,
  SelectItem,
  SelectLabel,
  SelectPopover,
  useComboboxStore,
  useSelectStore,
  Select as AriakitSelect,
} from "@ariakit/react";

type SelectProps = {
  label: string;
};

export default function Select({ label }: SelectProps) {
  const combobox = useComboboxStore({ resetValueOnHide: true });
  const select = useSelectStore({
    combobox,
    defaultValue: "Apple",
    gutter: 4,
    sameWidth: true,
  });

  const value = combobox.useState("value");
  const deferredValue = useDeferredValue(value);

  const matches = useMemo(() => {
    return matchSorter(list, deferredValue, {
      baseSort: (a, b) => (a.index < b.index ? -1 : 1),
    });
  }, [deferredValue]);

  return (
    <div className="wrapper">
      <SelectLabel store={select}>{label}</SelectLabel>
      <AriakitSelect store={select} className="select" />
      <SelectPopover store={select} composite={false} className="popover">
        <div className="combobox-wrapper">
          <Combobox
            store={combobox}
            autoSelect
            placeholder="Search..."
            className="combobox"
          />
        </div>
        <ComboboxList store={combobox}>
          {matches.map((value) => (
            <ComboboxItem key={value} focusOnHover className="select-item">
              {(props) => <SelectItem {...props} value={value} />}
            </ComboboxItem>
          ))}
        </ComboboxList>
      </SelectPopover>
    </div>
  );
}
