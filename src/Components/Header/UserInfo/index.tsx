import React, { FC } from "react";
import style from "./UserInfo.module.scss";

interface IProps {
    login:string;
}

const UserInfo: FC<IProps> = (props: IProps) => {
    const { login } = props;
    
    return (
        <>
            <div className={style.login}>{login}</div>
        </>
    );
};

export default UserInfo;
