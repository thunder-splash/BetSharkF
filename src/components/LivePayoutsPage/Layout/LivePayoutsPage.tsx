"use client"

import React, { useState } from "react";
import styles from "./LivePayoutsPage.module.css";
import LivePayouts from "@/components/LivePayoutsPage/Layout/LivePayoutsHistory/LivePayoutsHistory";

export default function LivePayoutsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.Payouts_container}>
        <div className={styles.headerContainer}>
          <img
            src="/clock-white.svg"
            alt="Clock White Icon"
            className={styles.icon}
          />
          <h1>Live Payouts</h1>
        </div>
      </div>
      <section className={styles.section}>
        <LivePayouts/>
      </section>
    </div>
  );
}
