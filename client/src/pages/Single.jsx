import moment from "moment";
import { useNavigate, useLocation, Link } from "react-router-dom";
import DOMPurify from "dompurify";
import { useContext, useState } from "react";
import { useEffect } from "react";

import Edit from "../img/edit.png";
import Delete from "../img/delete.png";

import Menu from "../components/Menu";
import { AuthContext } from "../context/authContext";
import axios from "axios";

const Single = () => {
    const [post, setPost] = useState({});

    const location = useLocation();
    const navigate = useNavigate();

    const postId = location.pathname.split("/")[2];

    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/posts/${postId}`);
                setPost(res.data);
            } catch (e) {
                console.log(e);
            }
        }
        fetchData();
    }, [postId]);

    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${postId}`);
            navigate("/");
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="single">
            <div className="content">
                {/* <img src={`../upload/${post?.img}`} alt={post?.title} /> */}
                <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="mock" />
                <div className="user">
                    {true && <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt={post.title} />}

                    <div className="info">
                        <span>{post.username}</span>
                        <p>Posted {moment(post.date).fromNow()}</p>
                    </div>

                    {true && (
                        <div className="edit">
                            <Link to="/write?edit=2" state={post}>
                                <img src={Edit} alt="Edit Post" />
                            </Link>
                            <img src={Delete} onClick={handleDelete} alt="Delete Post" />
                        </div>
                    )}
                </div>
                <h1>{post.title}</h1>
                <p
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(post.desc)
                    }}
                ></p>
            </div>
            <Menu cat={post.cat} />
        </div>
    );
}

export default Single;

