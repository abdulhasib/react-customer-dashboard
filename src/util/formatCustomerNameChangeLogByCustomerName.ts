// util/formatCustomerNameChangeLogByCustomerName.ts
import DateTool from './DateTool';

import { CustomerNameChangeLogByCustomerName } from '../redux/customerNameChangeLog/type';

const formatCustomerNameChangeLogByCustomerName = (
  customerNameChangeLogByCustomerName: CustomerNameChangeLogByCustomerName[]
): CustomerNameChangeLogByCustomerName[] => {
  console.log(customerNameChangeLogByCustomerName);
  // Sort name change logs by customer name
  return customerNameChangeLogByCustomerName.map((data) => {
    return {
      ...data,
      created_at: DateTool.formatDate(data.created_at),
      updated_at: DateTool.formatDate(data.created_at),
      customer_name_change_log: data.customer_name_change_log
        .sort((a, b) => {
          return new Date(b.created_at) - new Date(a.created_at);
        })
        .map((log) => {
          return {
            ...log,
            created_at: DateTool.formatDate(log.created_at),
            updated_at: DateTool.formatDate(log.created_at),
          };
        }),
    };
  });
};

export default formatCustomerNameChangeLogByCustomerName;
