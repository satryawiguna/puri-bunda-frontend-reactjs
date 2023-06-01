import {useSelector} from "react-redux";
import {
    useGetCountTotalEmployee,
    useGetCountTotalLogin,
    useGetCountTotalUnit,
    useGetCountTotalPosition,
    useGetTopTenUserByLogin
} from "../../hooks";
import {useEffect, useState} from "react";
import DatePicker from "react-datepicker";
import moment from "moment";

const Dashboard = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const [filter, setFilter] = useState({
        start_date: "",
        end_date: ""
    })

    const {userInfo} = useSelector((state) => state.auth)

    const {
        data: dataGetCountTotalEmployee,
        isLoading: isLoadingGetCountTotalEmployee,
        refetch: refetchGetCountTotalEmployee
    } = useGetCountTotalEmployee(filter)

    const {
        data: dataGetCountTotalLogin,
        isLoading: isLoadingGetCountTotalLogin,
        refetch: refetchGetCountTotalLogin
    } = useGetCountTotalLogin(filter)

    const {
        data: dataGetCountTotalUnit,
        isLoading: isLoadingGetCountTotalUnit,
        refetch: refetchGetCountTotalUnit
    } = useGetCountTotalUnit()

    const {
        data: dataGetCountTotalPosition,
        isLoading: isLoadingGetCountTotalPosition,
        refetch: refetchGetCountTotalPosition
    } = useGetCountTotalPosition()

    const {
        data: dataGetTopTenUserByLogin,
        isLoading: isLoadingTopTenUserByLogin,
        refetch: refetchTopTenUserByLogin
    } = useGetTopTenUserByLogin(filter)


    useEffect(() => {
        refetchGetCountTotalEmployee()
        refetchGetCountTotalLogin()
        refetchGetCountTotalUnit()
        refetchGetCountTotalPosition()
        refetchTopTenUserByLogin()
    }, []);

    return (
        <div className="container mt-5">
            <h1 className="mb-5">
                Welcome back <span className="has-text-weight-bold">{userInfo.email}</span>
            </h1>
            <div className="columns is-multiline is-flex-direction-row mt-5">
                <div className="column is-one-fifth">
                    <div className="field">
                        <div className="control">
                            <DatePicker className="input is-success"
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        placeHolder="Start Date"/>
                        </div>
                    </div>
                </div>
                <div className="column is-one-fifth">
                    <div className="field">
                        <div className="control">
                            <DatePicker className="input is-success"
                                        selected={endDate}
                                        onChange={(date) => setEndDate(date)}
                                        placeHolder="End Date"/>
                        </div>
                    </div>
                </div>
                <div className="column is-one-fifth">
                    <div className="field base">
                        <div className="control">
                            <button className="button is-link" onClick={() => {
                                setFilter({
                                    start_date: startDate ? moment(startDate).format("YYYY-MM-DD") : "",
                                    end_date: endDate ? moment(endDate).format("YYYY-MM-DD") : ""
                                })
                            }}>Filter
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="columns is-multiline is-flex-direction-row">
                <div className="column is-one-third">
                    <div className="card">
                        <header className="card-header">
                            <p className="card-header-title">
                                Total Employee
                            </p>
                        </header>
                        <div className="card-content">
                            <div className="content">
                                <h2>{!isLoadingGetCountTotalEmployee ? dataGetCountTotalEmployee.result : 'Loading...'}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column is-one-third">
                    <div className="card">
                        <header className="card-header">
                            <p className="card-header-title">
                                Total Login
                            </p>
                        </header>
                        <div className="card-content">
                            <div className="content">
                                <h2>{!isLoadingGetCountTotalLogin ? dataGetCountTotalLogin.result : 'Loading...'}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column is-one-third">
                    <div className="card">
                        <header className="card-header">
                            <p className="card-header-title">
                                Total Unit
                            </p>
                        </header>
                        <div className="card-content">
                            <div className="content">
                                <h2>{!isLoadingGetCountTotalUnit ? dataGetCountTotalUnit.result : 'Loading...'}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column is-one-third">
                    <div className="card">
                        <header className="card-header">
                            <p className="card-header-title">
                                Total position
                            </p>
                        </header>
                        <div className="card-content">
                            <div className="content">
                                <h2>{!isLoadingGetCountTotalPosition ? dataGetCountTotalPosition.result : 'Loading...'}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column is-one-half">
                    <div className="card">
                        <header className="card-header">
                            <p className="card-header-title">
                                Top Ten Employee
                            </p>
                        </header>
                        <div className="card-content">
                            <div className="content">
                                {!isLoadingTopTenUserByLogin ?
                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th><abbr title="Nick Name">Nick Name</abbr></th>
                                            <th>Full Name</th>
                                            <th><abbr title="Unit">Unit</abbr></th>
                                            <th><abbr title="Position">Position</abbr></th>
                                            <th><abbr title="Join Date">Join Date</abbr></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {dataGetTopTenUserByLogin.datas.map((topTenUserByLogin, index) =>
                                            <tr key={topTenUserByLogin.id}>
                                                <th>{topTenUserByLogin.nick_name}</th>
                                                <td>{topTenUserByLogin.full_name}</td>
                                                <td>{(topTenUserByLogin.unit) ? topTenUserByLogin.unit.title : 'N/A'}</td>
                                                <td>{(topTenUserByLogin.positions.length > 0) ? topTenUserByLogin.positions.first().title : 'N/A'}</td>
                                                <td>{topTenUserByLogin.join_date}</td>
                                            </tr>
                                        )}
                                        </tbody>
                                    </table> : 'Loading...'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard
