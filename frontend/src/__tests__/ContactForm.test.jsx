import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ContactForm from "../components/ContactForm";

jest.mock("../services/api", () => ({
  submitInquiry: jest.fn().mockResolvedValue({ id: 1 }),
}));

describe("ContactForm validation", () => {
  test("shows errors on empty submit", async () => {
    render(<ContactForm />);
    fireEvent.click(screen.getByText(/submit inquiry/i));

    expect(await screen.findAllByText(/required/i)).toHaveLength(4);
  });

  test("submits with valid data", async () => {
    render(<ContactForm />);
    fireEvent.change(screen.getByPlaceholderText(/enter your name here/i), {
      target: { value: "Alex Smith" },
    });
    fireEvent.change(screen.getByPlaceholderText(/you@example.com/i), {
      target: { value: "jane@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(/enter your phone number/i), {
      target: { value: "+1 555 123 4567" },
    });
    fireEvent.change(screen.getByPlaceholderText(/google/i), {
      target: { value: "Google" },
    });
    fireEvent.change(screen.getByPlaceholderText(/enter your country/i), {
      target: { value: "USA" },
    });
    fireEvent.change(screen.getByPlaceholderText(/enter your job title/i), {
      target: { value: "Director of AI" },
    });
    fireEvent.change(
      screen.getByPlaceholderText(/describe your project goals/i),
      {
        target: { value: "Need MLOps pipeline and monitoring setup." },
      }
    );

    fireEvent.click(screen.getByText(/submit inquiry/i));

    await waitFor(() =>
      expect(screen.getByText(/thanks!/i)).toBeInTheDocument()
    );
  });
});


