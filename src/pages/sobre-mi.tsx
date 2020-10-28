import React from "react";
import { Head } from "../components/head";

import { Layout } from '../components/layout';

export default function About() {
    return (
        <Layout>
            <Head title="Sobre mí" />
            <div>
                <h1>Sobre mí</h1>
                <p>Las entradas aparecerán aqui</p>
            </div>
        </Layout>
    )
}
