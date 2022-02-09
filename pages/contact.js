import Head from "next/head";
import { Fragment } from "react";
import ContactForm from "../components/contact/contact-form";

export default function ContactPage() {
    return <Fragment>
        <Head>
            <title>My Blog Contacts</title>
            <meta name="description" content="I post about programming contact" />
        </Head>
        <ContactForm />
    </Fragment>
}