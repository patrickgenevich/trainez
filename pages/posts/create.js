import React from "react";
import Stream from "../../components/stream";
import { StatusUpdateForm } from "react-activity-feed";
import Layout from "../../components/layout";

export default function Create() {
    return (
        <Layout>
            <Stream>
                <StatusUpdateForm feedGroup="timeline" userId="user-one" />
            </Stream>
        </Layout>
    );
}