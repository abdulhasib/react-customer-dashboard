// container/CustomerNameChangeLogPage/CustomerNameChangeLogPage.tsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../redux/store';
import { fetchCustomerNameChangeLogsByCustomerName } from '../../redux/customerNameChangeLog/action';

import Card from '../../component/Card';

const CustomerNameChangeLogPage: React.FC = () => {
  const nameChangeLogsByCustomerNames = useSelector(
    (state: RootState) => state.customerNameChangeLog.dataByCustomerName
  );
  const loading = useSelector(
    (state: RootState) => state.customerNameChangeLog.loading
  );
  const dispatch = useDispatch();
  const { customerNameId } = useParams();

  useEffect(() => {
    if (customerNameId) {
      // Check if customerNameId exists
      dispatch(fetchCustomerNameChangeLogsByCustomerName(customerNameId));
    }
  }, [dispatch, customerNameId]);

  return (
    <div>
      <div className="flex justify-center mb-5">
        <h2 className="h2">Customer Name Change Log</h2>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="p-5 flex flex-col justify-center items-center">
          {nameChangeLogsByCustomerNames.length ? (
            <div>
              {nameChangeLogsByCustomerNames.map((logByCustomer) => (
                <div key={logByCustomer.id}>
                  <Card
                    header={
                      <div>
                        {logByCustomer.firstname} {logByCustomer.lastname}
                      </div>
                    }
                    body={
                      <div>
                        <span>
                          Customer Created: {logByCustomer.created_at}
                        </span>
                      </div>
                    }
                  />

                  {logByCustomer.customer_name_change_log.map((log) => (
                    <Card
                      key={log.id}
                      body={
                        <div>
                          <span>Field: {log.data.fieldname}</span> <br />
                          <span>Previous Value: {log.data.previousValue}</span>
                          <br />
                          <span>Updated Value: {log.data.updatedValue}</span>
                          <br />
                          <span>Created: {log.created_at}</span> <br /> <br />
                          <span>Change made by user: {log.user.username}</span>
                        </div>
                      }
                    />
                  ))}
                </div>
              ))}
            </div>
          ) : (
            <div>No Logs</div>
          )}
        </div>
      )}
    </div>
  );
};

export default CustomerNameChangeLogPage;
