export interface TableProps {
  headers: string[];
  data: { [key: string]: any }[];
  caption?: string;
  disabled?: boolean;
}