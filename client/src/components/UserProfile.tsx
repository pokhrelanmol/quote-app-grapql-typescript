import React, { useEffect, useState } from "react";
import { useUser } from "../contexts/User";
const UserProfile = () => {
    const [avatar, setAvatar] = useState("");
    const { user, setUser } = useUser();
    useEffect(() => {
        const fetchAvatar = async () => {
            const res = await fetch(
                `https://avatars.dicebear.com/api/avataaars/:${"anmol"}.svg`
            );
            setAvatar(res.url);
        };
        fetchAvatar();
    }, [user]);
    return (
        <div className="flex flex-col items-center">
            <img src={avatar} alt="Avatar" className="rounded-full w-20 h-20" />
            <p>NAME</p>
            <p>Email</p>
            <h4 className="bold text-2xl mb-3">Your Quotes</h4>
            <ul className="">
                <li>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </li>
            </ul>
            <ul>
                <li>
                    Lorem ipsum, dolor sit amijaet consectetur adipisicing elit.
                </li>
            </ul>
        </div>
    );
};

export default UserProfile;
