import { url } from "./Config";
import instance from "axios";
const axios = instance.create();

const Post = (path, params) => {
	const promise = new Promise((resolve, reject) => {
		axios.post(`${url}/${path}/`, params).then(
			(res) => {
				resolve(res);
			},
			(err) => {
				reject(err);
			}
		);
	});
	return promise;
};

export default Post;