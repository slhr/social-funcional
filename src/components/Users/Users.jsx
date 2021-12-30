import React, {useEffect} from "react";
import {FlexContainer} from "../Styled/containers";
import {connect} from "react-redux";

import {follow, requestUsers, setCurrentPage, toggleFollowingProgress, unfollow} from "../../redux/users-reducer";
import Preloader from "../common/Preloader";
import User from "./User";
import Paginator from "./Paginator";


const Users = ({
                   users, totalUsersCount, currentPage, pageSize, requestUsers,
                   follow, unfollow, followingInProgress, isFetching
               }) => {

    const onPageChanged = pageNumber => {
        requestUsers(pageNumber, pageSize);
    };

    useEffect(() => {
        requestUsers(currentPage, pageSize);
    }, [requestUsers, currentPage, pageSize]);

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
                                users.map(u => <User key={u.id}
                                                     user={u}
                                                     followingInProgress={followingInProgress}
                                                     unfollow={unfollow}
                                                     follow={follow}/>
                                )
                            }
                        </FlexContainer>
                    }
                </div>
            }
        </>


    );
};

const mapStateToProps = state => ({
    users: state.users.users,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage,
    isFetching: state.users.isFetching,
    followingInProgress: state.users.followingInProgress,
});

export default connect(mapStateToProps,
    {follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers})
(Users);

