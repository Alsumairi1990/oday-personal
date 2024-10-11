'use client'
import { useContext, useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader"; // Remove if not needed
import Link from "next/link"; // Remove if not needed
import EmployeeProfile from "../../../_components/EmployeeProfile";
import ProfileAccount from "../../../_components/Account";
import { EmployeeWithModels } from "../../../_utils/EmployeeWithModels";
import { getUsersWithModels } from "../../../_actions/Actions";
import {  PageTitleContext, usePageTitle } from "../../../_utils/PageTitleContext";

interface Props {
  params: {
      id: string;
  };
}

const AccountPage = ({ params }: Props) => {
    const [employee, setEmployee] = useState<EmployeeWithModels>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>();
    // const [pageTitle, setPageTitle] = useContext(PageTitleContext);
    const { title, setTitle } = usePageTitle();

    useEffect(() => {
        setTitle({ title: 'New Page Title' });
    }, []);

    const getEmployee = async () => {
        try {
            setLoading(true);
            const data = await getUsersWithModels(params.id);
            setEmployee(data);
            setLoading(false);
        } catch (error: any) {
            setLoading(false);
            setError(error.message);
        }
    };
    useEffect(() => {
        getEmployee();
    }, [params.id]);

    return (
        <div className="py-2">
                {employee && <ProfileAccount employee={employee} />} 
        </div>
    );
};
export default AccountPage;
