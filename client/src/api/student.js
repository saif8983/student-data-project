import axios from "axios";

import { BASE_URL, ENDPOINT } from "../constant";

export function allStudentsData() {

    return axios.get(`${BASE_URL}/${ENDPOINT.allStudent}`)
}
export function addStudentsData(dataOfStudent) {
    console.log(dataOfStudent)
    return axios.post(`${BASE_URL}/${ENDPOINT.addStudent}`, dataOfStudent)
}
export function updateStudentsData(id, updateStudent) {

    return axios.patch(`${BASE_URL}/${ENDPOINT.updateStudent}/${id}`, updateStudent)
}
export function deleteStudentsData(id) {
    return axios.delete(`${BASE_URL}/${ENDPOINT.deleteStudent}/${id}`)
}