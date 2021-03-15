import * as React from 'react';

import PieChart from '../../../components/common/PieChart/PieChart';
import VerticalBarChart from '../../../components/common/VerticalBarChart/VerticalBarChart';

const Dashboard = ({ data, labels, data2, labels2, data3, labels3 }: any) => {
    return (
        <section className="course-details">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <PieChart data={data} labels={labels} />
                    </div>
                    <div className="col-lg-6">
                        <PieChart data={data2} labels={labels2} />
                    </div>
                </div>
                <div className="row mt-5 pt-5">
                    <div className="col-lg-12">
                        <VerticalBarChart data={data3} labels={labels3} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
