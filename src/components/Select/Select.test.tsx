import { render, screen } from "@testing-library/react";
import Select from "./Select";

describe("FiltrableSelect", () => {
  it("renders label and placeholder text", () => {
    render(<Select label="ID" />);

    expect(screen.getByLabelText("ID")).toBeInTheDocument();
  });
});
