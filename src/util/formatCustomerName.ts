// util/formatCustomerName.ts
import DateTool from './DateTool';

import { CustomerName } from '../redux/customerName/type';

const formatCustomerName = (
  customerNameByCustomerName: CustomerName[]
): CustomerName[] => {
  // Sort by name change logs by customer nameand format date
  return customerNameByCustomerName
    .map((data) => ({
      ...data,
      created_at: DateTool.formatDate(data.created_at),
      updated_at: DateTool.formatDate(data.created_at),
    }))
    .sort((a, b) => a.firstname.localeCompare(b.firstname));
};

export default formatCustomerName;
