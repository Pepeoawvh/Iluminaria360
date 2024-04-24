"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/wsp.module.css";


const WspButton = () => {

  return (
    <div>
      <button className={`animate-fade animate-delay-300 ${styles.wsp}`}>
        <Link href="https://wa.me/+56949866129">
          <Image src="img/wspicon.svg" alt="WhatsApp Icon" width={50} height={50} />
        </Link>
      </button>
    </div>
  );
};

export default WspButton;
