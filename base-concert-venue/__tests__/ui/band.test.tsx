import { render, screen } from "@testing-library/react";

import BandComponent from "@/pages/bands/[bandId]";

import { readFakeData } from "../__mocks__/fakeData";

test("band component displays correct band information", async () => {
  const { fakeBands } = await readFakeData();
  render(<BandComponent band={fakeBands[0]} error={null} />);

  const heading = screen.getByRole("heading", {
    name: /the wandering bunnies/i,
  });
  expect(heading).toBeInTheDocument();
});

test("band component displays error", async () => {
  render(<BandComponent band={null} error="Error message" />);

  const error = screen.getByRole("heading", {
    name: /error message/i,
  });
  expect(error).toBeInTheDocument();
});
