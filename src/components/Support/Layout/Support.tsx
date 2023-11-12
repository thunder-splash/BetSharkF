"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import styles from "./support.module.css";
import SupportHistory from "@/components/Support/Layout/SupportHistory/SupportHistory";
import CreateTicket from "./CreateTicket/CreateTicket";

export default function Support() {
  const [showCreateTicket, setShowCreateTicket] = useState(false);

  return (
    <div className={styles.mainwr}>
      <img src="/greenbgflow.svg" alt="light" className={styles.greenbg} />
      <div className={styles.container}>
        <div className={styles.Payouts_container}>
          <div className={styles.headerContainer}>
            <Image
              src="/supporting-white.svg"
              alt="Supporting White Icon"
              width={20}
              height={20}
              className={styles.icon}
            />
            <h1>Support</h1>
            <div className={styles.headerContent}>
              <button
                className={styles.supportButton}
                onClick={() => setShowCreateTicket(true)}
              >
                <Image
                  src="/plus.svg"
                  alt="Plus Icon"
                  width={20}
                  height={20}
                  className={styles.icon}
                />{" "}
                Create ticket
              </button>
            </div>
          </div>
          <p className={styles.subtext}>
            Open the 2FA mobile app and scan the following QR barcode. If the
            2FA Mobile App<br></br> does not support QR barcodes, enter the
            number from below the picture.
          </p>
        </div>
        <section className={styles.section}>
          <SupportHistory />
        </section>
      </div>
      <CreateTicket show={showCreateTicket} onClose={() => setShowCreateTicket(false)} />
    </div>
  );
}
