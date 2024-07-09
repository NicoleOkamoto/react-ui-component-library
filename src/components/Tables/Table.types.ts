export interface TableProps {
  headers: string[];
  data: { [key: string]: unknown }[];
  caption?: string;
  disabled?: boolean;
}
