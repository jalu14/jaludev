import React from 'react';
import { Head } from '../components/head';
import { Layout } from '../components/layout';

export default function NotFound() {
    return (
        <Layout>
            <Head title="404" />
            <div>
                <h1>404</h1>
                <p>No encuentro nada</p>
            </div>
        </Layout>
    )
}