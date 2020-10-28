import React from "react"
import { Head } from "../components/head";

import { Layout } from '../components/layout';

export default function Home() {
    return (
        <Layout>
            <Head title="Inicio" />
            <div>Hello world!</div>
        </Layout>
    )
}
