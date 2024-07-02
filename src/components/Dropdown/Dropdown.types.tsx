export interface DropdownProps {
  name: string;
  id: string;
  options: { value: string; label: string }[];
  disabled?: boolean;
}
