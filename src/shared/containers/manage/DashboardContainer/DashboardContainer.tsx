import * as React from 'react';

import Dashboard from 'components/manage/Dashboard/Dashboard';

const DashboardContainer = ({ data, labels, data2, labels2, data3, labels3 }: any) => {
    return (
        <Dashboard
            data={data}
            labels={labels}
            data2={data2}
            labels2={labels2}
            data3={data3}
            labels3={labels3}
        />
    );
};

export default DashboardContainer;
