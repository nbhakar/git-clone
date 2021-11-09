import axios from "axios";

export const fetchRepoList = async(user) => {
    const {data} = await axios.get(`https://api.github.com/repos/${user.org}/${user.repo}`)
    // console.log(data.name);
    return data;

}
export const fetchRepoBranch = async(user) => {
    const {data} = await axios.get(`https://api.github.com/repos/${user.org}/${user.repo}/branches`)

    return data;

}
export const fetchRepoIssues = async(user) => {
    const {data} = await axios.get(`https://api.github.com/repos/${user.org}/${user.repo}/issues`)

    return data;

}
export const fetchBranchCommits = async(user) => {
    const {data} = await axios.get(`https://api.github.com/repos/${user.org}/${user.repo}/commits?sha=${user.branch}`)

    return data;

}
