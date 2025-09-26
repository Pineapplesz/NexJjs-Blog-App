"use client";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

type Props = {};

const SubmitButton = (props: Props) => {
  const { pending } = useFormStatus();
  return (
    <Button className="w-fit" type="submit" disabled={pending}>
      {pending ? "Submitting" : "Submit"}
    </Button>
  );
};

export default SubmitButton;
