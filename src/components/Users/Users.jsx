import React, {useEffect} from "react";
import {FlexContainer} from "../Styled/containers";
import {useDispatch, useSelector} from "react-redux";
import {requestUsers} from "../../redux/users-reducer";
import Preloader from "../common/Preloader";
import User from "./User";
import Paginator from "./Paginator";


const Users = () => {
    const users = useSelector(state => state.users.users);
    const pageSize = useSelector(state => state.users.pageSize);
    const totalUsersCount = useSelector(state => state.users.totalUsersCount);
    const currentPage = useSelector(state => state.users.currentPage);
    const isFetching = useSelector(state => state.users.isFetching);

    const dispatch = useDispatch();

    const onPageChanged = pageNumber => {
        dispatch(requestUsers(pageNumber, pageSize));
    };

    useEffect(() => {
        dispatch(requestUsers(currentPage, pageSize));
    }, [dispatch, currentPage, pageSize]);

    return (

        <>
            {
                isFetching
                    ? <Preloader/>
                    : null
            }

            {
                <div>
                    <Paginator currentPage={currentPage}
                               onPageChanged={onPageChanged}
                               totalUsersCount={totalUsersCount}
                               pageSize={pageSize}/>

                    {
                        !isFetching &&

                        <FlexContainer width="100%" flexWrap="wrap" justify="space-between">
                            {
                                users.map(u => <User key={u.id} user={u} />)
                            }
                        </FlexContainer>
                    }
                </div>
            }
        </>


    );
};

export default Users;


