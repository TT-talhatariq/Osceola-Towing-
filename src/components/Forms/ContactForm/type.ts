export interface FormDataType {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
