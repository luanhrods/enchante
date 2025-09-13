"use client"

import type React from "react"
import { useState, useEffect } from "react"

const PhotographyBanner: React.FC = () => {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const texts = ["marcas.", "ideias.", "líderes.", "resultado."]

  useEffect(() => {
    const typeSpeed = isDeleting ? 40 : 100
    const currentFullText = texts[currentIndex]

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentFullText.length) {
          setCurrentText(currentFullText.substring(0, currentText.length + 1))
        } else {
          // Finished typing, start deleting after delay
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1))
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false)
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
        }
      }
    }, typeSpeed)

    return () => clearTimeout(timer)
  }, [currentText, currentIndex, isDeleting, texts])

  return (
    <>
      <style>{`
        /* Font faces */
        @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@700&family=Roboto:wght@400&display=swap');

        /* Component styles */
        .photography-banner,
        .photography-banner * {
          box-sizing: border-box;
        }
        
        .photography-banner {
          margin: 0;
          background-color: #002b36;
          
          background-image: url("https://www.yudiz.com/codepen/photography-banner/frame.png");
          background-size: cover;
          background-repeat: no-repeat;
          overflow-x: hidden;
          min-height: 100vh;
          width: 100%;
        }

        .photography-banner *::selection {
          background-color: rgba(241, 231, 40, 0.2);
          color: #ffffff;
        }

        .info-section {
          height: 100vh;
          min-height: 780px;
          padding: 0 0 0 30px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          position: relative;
          z-index: 1;
          user-select: none;
          overflow: hidden;
        }

        .info-section::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.4;
          background: #d33682;
          filter: blur(162px);
          height: 35%;
          width: 55%;
          position: absolute;
          top: -40%;
          left: -66%;
          transform: translate(50%, 50%);
          z-index: -1;
        }

        /* Left part */
        .left-part {
          padding: 20px 0 0;
          overflow: hidden;
        }

        .left-part h1 {
          margin: 0;
          color: #fff;
          font-family: "Lexend", sans-serif;
          font-weight: 700;
          font-size: clamp(48px, 12vw, 160px);
          line-height: 0.75;
          font-style: normal;
          text-transform: uppercase;
        }

        .left-part h1 .text {
          color: #d33682;
          display: block;
          height: clamp(100px, 15vw, 120px);
        }

        .left-part h1 .d-flex {
          display: flex;
          align-items: center;
        }

        .left-part h1 .char {
          transform: translateY(0);
          transition: transform 0.5s;
          animation: slideUp 0.3s ease-out forwards;
        }

        .typed-cursor {
          display: none !important;
        }

        @keyframes slideUp {
          from {
            transform: translateY(-515px);
          }
          to {
            transform: translateY(0);
          }
        }

        .left-part p {
          width: 72%;
          margin: 20px 0 0;
          color: #fff;
          font-size: 16px;
          font-style: normal;
          font-weight: normal;
          line-height: 2;
          font-family: "Lexend";
          opacity: 0.8;
        }

        /* Button */
        .book-link {
          margin: 40px 0 0;
          padding: 0;
          border: 0;
          font-size: 56px;
          line-height: 1;
          color: #f1f1f1;
          letter-spacing: 0.25px;
          text-transform: uppercase;
          font-family: "Lexend";
          font-weight: 300;
          font-style: normal;
          display: inline-flex;
          align-items: center;
          gap: 28px;
          position: relative;
          text-decoration: none;
          cursor: pointer;
        }

        .book-link .linktext {
          position: relative;
          overflow: hidden;
          display: inline-block;
        }

        .book-link .linktext::before {
          position: absolute;
          content: "";
          left: 0;
          bottom: 6px;
          width: 100%;
          height: 3px;
          background-color: #ffffff;
          transform: scaleX(1);
          transition: transform 250ms ease-in-out;
          transform-origin: 0 0;
        }

        .book-link:hover .linktext:before {
          transform: scaleX(0);
          transform-origin: 100% 100%;
        }

        .book-link .arrow {
          height: 36px;
          width: 36px;
          top: -5px;
          display: inline-block;
          position: relative;
          overflow: hidden;
        }

        .book-link .arrow::before,
        .book-link .arrow::after {
          position: absolute;
          content: "";
          background-color: #d33682;
          transition: all ease-in-out 0.35s;
          transform-origin: 0 0;
          border-radius: 30px;
        }

        .book-link .arrow::before {
          height: 2px;
          width: 100%;
          top: 0;
          right: 0;
        }

        .book-link .arrow::after {
          width: 2px;
          height: 100%;
          top: 0;
          right: 0;
        }

        .book-link .arrow span {
          background-color: #d33682;
          height: 2px;
          width: 100%;
          display: inline-block;
          transform: rotate(-45deg) translate(-3px, -1px);
          transform-origin: right top;
          border-radius: 30px;
          position: relative;
          transition: all ease-in-out 0.35s;
          position: absolute;
          top: 0;
          left: 0;
        }

        .book-link .arrow span::before {
          background-color: #d33682;
          content: "";
          height: 100%;
          width: 15px;
          left: -15px;
          top: 0;
          position: absolute;
        }

        /* Right part */
        .right-part {
          background-color: transparent;
          height: 588px;
          width: 588px;
          margin: 0 0 0 auto;
          margin-right: -14px;
          display: block;
          position: relative;
          z-index: 1;
          flex-shrink: 0;
        }

        .right-part::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.4;
          background: #d33682;
          filter: blur(112px);
          height: 35%;
          width: 55%;
          position: absolute;
          top: 50%;
          right: 33%;
          transform: translate(50%, -50%);
          z-index: -1;
        }

        .particles-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
        }

        .particle {
          position: absolute;
          background: rgba(211, 54, 130, 0.6);
          border-radius: 50%;
          pointer-events: none;
          animation: float linear infinite;
        }

        .particle:nth-child(odd) {
          background: rgba(203, 75, 22, 0.4);
        }

        .particle:nth-child(3n) {
          background: rgba(255, 255, 255, 0.2);
        }

        @keyframes float {
          0% {
            transform: translateX(-100px) translateY(0px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(calc(100vw + 100px)) translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }

        .bg-line {
          position: absolute;
          top: 0;
          right: 0;
          width: 50%;
          height: 85px;
          z-index: -1;
          overflow: hidden;
          display: flex;
          display: -webkit-flex;
          white-space: nowrap;
        }

        .bg-line img {
          position: relative;
          flex-shrink: 0;
          -webkit-flex-shrink: 0;
          animation: 26s linear infinite;
        }

        .bg-line img:nth-child(1) {
          animation-name: first-text;
        }

        .bg-line img:nth-child(2) {
          animation-name: second-text;
        }

        @keyframes first-text {
          50% {
            transform: translateX(-100%);
            opacity: 1;
          }
          50.05% {
            opacity: 0;
          }
          50.1% {
            transform: translateX(100%);
            opacity: 1;
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes second-text {
          50% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(-200%);
          }
          0% {
            transform: translateX(0%);
          }
        }

        .bg-dash-circle {
          position: absolute;
          bottom: -35px;
          right: -13px;
          z-index: -1;
          width: 180px;
          aspect-ratio: 1/1;
        }

        .bg-dash-circle img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center center;
          animation: circle-rotate 18s linear infinite;
        }

        @keyframes circle-rotate {
          0% {
            transform: rotate(0);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .hero-image {
          position: absolute;
          top: 50%;
          left: 45%;
          transform: translate(-50%, -50%);
          width: 85%;
          height: auto;
          z-index: 2;
          border-radius: 12px;
          opacity: 0.9;
          object-fit: cover;
          max-height: 90%;
        }

        /* Responsive */
        @media screen and (min-width: 1500px) {
          .info-section {
            padding-left: 120px;
          }
        }

        @media screen and (min-width: 1400px) {
          .info-section {
            padding-left: 100px;
          }
        }

        @media screen and (max-width: 1199px) {
          .bg-line {
            height: 68px;
          }
          .right-part {
            height: 400px;
            width: 400px;
          }
          .right-part .d-flex {
            gap: 20px;
          }
          .bg-dash-circle {
            width: 130px;
          }
          .hero-image {
            left: 48%;
            width: 90%;
          }
        }

        @media screen and (max-width: 991px) {
          .info-section {
            flex-direction: column;
            text-align: center;
          }
          .left-part {
            padding: 40px 20px;
          }
          .right-part {
            height: 300px;
            width: 300px;
            margin: 20px auto 0;
          }
          .hero-image {
            left: 50%;
            width: 95%;
            max-height: 85%;
          }
        }

        @media screen and (max-width: 767px) {
          .photography-banner {
            overflow-x: hidden;
          }
          
          .info-section {
            display: block;
            padding: 0;
            overflow: visible;
            min-height: auto;
            height: auto;
            flex-direction: column;
          }
          
          .bg-line {
            height: 52px;
          }
          
          .left-part {
            padding: 40px 16px 30px;
            overflow: visible;
            text-align: center;
          }
          
          .right-part {
            height: 280px;
            width: 280px;
            margin: 20px auto;
          }
          
          .left-part h1 .text {
            height: 88px;
            font-size: 2.5rem;
          }
          
          .left-part p {
            font-size: 14px;
            width: 100%;
            margin: 0 auto;
          }
          
          .bg-dash-circle {
            width: 80px;
          }

          .hero-image {
            left: 50%;
            width: 100%;
            max-height: 80%;
          }

          .cta-button {
            font-size: 16px;
            margin-top: 20px;
          }
        }

        @media screen and (max-width: 480px) {
          .left-part h1 .text {
            font-size: 2rem;
            height: 70px;
          }
          
          .right-part {
            height: 240px;
            width: 240px;
          }

          .left-part p {
            font-size: 12px;
          }
        }

        /* Features Section */
        .features-section {
          padding: 100px 30px;
          background-color: #073642;
          position: relative;
          overflow: hidden;
        }

        .features-section::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.3;
          background: #d33682;
          filter: blur(140px);
          height: 40%;
          width: 40%;
          position: absolute;
          top: 20%;
          right: -20%;
          z-index: -1;
        }

        .features-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 60px;
          align-items: center;
        }

        .features-content h2 {
          color: #fff;
          font-family: "Lexend", sans-serif;
          font-weight: 700;
          font-size: clamp(60px, 8vw, 120px);
          line-height: 0.9;
          margin: 0 0 30px;
          text-transform: uppercase;
        }

        .features-content h2 .highlight {
          color: #d33682;
        }

        .features-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .feature-item {
          padding: 25px 0;
          border-bottom: 1px solid #333;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        /* Updated feature icons to be more modern */
        .feature-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #d33682, #cb4b16);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: bold;
          color: #fff;
          flex-shrink: 0;
          box-shadow: 0 4px 15px rgba(211, 54, 130, 0.3);
        }

        .feature-text h3 {
          color: #fff;
          font-family: "Lexend";
          font-size: 18px;
          margin: 0 0 8px;
          text-transform: uppercase;
        }

        .feature-text p {
          color: #aaa;
          font-family: "Roboto", sans-serif;
          font-size: 14px;
          margin: 0;
          line-height: 1.6;
        }

        /* Features Section Responsive */
        @media screen and (max-width: 991px) {
          .features-section {
            padding: 60px 20px;
          }
          
          .features-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .features-content h2 {
            font-size: clamp(40px, 6vw, 80px);
            margin-bottom: 20px;
          }
          
          .feature-item {
            padding: 20px 0;
          }
          
          .feature-icon {
            width: 40px;
            height: 40px;
            font-size: 16px;
          }
          
          .feature-text h3 {
            font-size: 16px;
          }
          
          .feature-text p {
            font-size: 13px;
          }
        }

        @media screen and (max-width: 767px) {
          .features-section {
            padding: 40px 16px;
          }
          
          .features-container {
            gap: 30px;
          }
          
          .features-content h2 {
            font-size: clamp(32px, 8vw, 60px);
            text-align: center;
          }
          
          .feature-item {
            flex-direction: column;
            text-align: center;
            gap: 15px;
            padding: 15px 0;
          }
        }

        /* Services Section */
        .services-section {
          padding: 100px 30px;
          background-color: #002b36;
          position: relative;
          overflow: hidden;
        }

        .services-section::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.4;
          background: #d33682;
          filter: blur(120px);
          height: 50%;
          width: 30%;
          position: absolute;
          top: 50%;
          left: -15%;
          transform: translateY(-50%);
          z-index: -1;
        }

        .services-container {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }

        .services-title {
          color: #fff;
          font-family: "Lexend", sans-serif;
          font-weight: 700;
          font-size: clamp(60px, 8vw, 100px);
          line-height: 0.9;
          margin: 0 0 80px;
          text-transform: uppercase;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }

        /* Modernized service cards without icons */
        .service-card {
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          padding: 30px 25px;
          position: relative;
          backdrop-filter: blur(10px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          text-align: center;
          overflow: hidden;
        }

        .service-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .service-card:hover::before {
          left: 100%;
        }

        .service-card:hover {
          transform: translateY(-8px);
          border-color: rgba(211, 54, 130, 0.5);
          background: rgba(211, 54, 130, 0.1);
          box-shadow: 0 15px 40px rgba(211, 54, 130, 0.2);
        }

        .service-number {
          display: inline-block;
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #d33682, #cb4b16);
          border-radius: 50%;
          color: #fff;
          font-family: "Lexend", sans-serif;
          font-weight: 700;
          font-size: 16px;
          line-height: 40px;
          margin: 0 auto 20px;
          position: relative;
          z-index: 2;
        }

        .service-title {
          color: #fff;
          font-family: "Lexend", sans-serif;
          font-weight: 700;
          font-size: 18px;
          margin: 0 0 15px;
          text-transform: uppercase;
          position: relative;
          z-index: 2;
        }

        .service-description {
          color: #e0e0e0;
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 30px;
          opacity: 0.9;
        }

        .service-button {
          background: linear-gradient(135deg, #d33682, #cb4b16);
          color: #fff;
          padding: 12px 25px;
          border: none;
          border-radius: 25px;
          font-family: "Lexend";
          font-size: 14px;
          font-weight: bold;
          text-transform: uppercase;
          text-decoration: none;
          display: inline-block;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          z-index: 2;
          box-shadow: 0 4px 15px rgba(211, 54, 130, 0.3);
        }

        .service-button:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 8px 25px rgba(211, 54, 130, 0.4);
          background: linear-gradient(135deg, #e63946, #d33682);
        }

        .hot-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          background: linear-gradient(135deg, #ff4444, #ff6b6b);
          color: white;
          font-weight: bold;
          font-size: 11px;
          padding: 6px 12px;
          border-radius: 20px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 2px 8px rgba(255, 68, 68, 0.3);
          animation: pulse 2s infinite;
          z-index: 10;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        /* Services Section Responsive */
        @media screen and (max-width: 991px) {
          .services-section {
            padding: 60px 20px;
          }
          
          .services-title {
            font-size: clamp(40px, 6vw, 80px);
            margin-bottom: 50px;
          }
          
          .services-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 25px;
            margin-bottom: 40px;
          }
          
          .service-card {
            padding: 25px 20px;
          }
          
          .service-card h3 {
            font-size: 16px;
          }
          
          .service-card p {
            font-size: 13px;
          }
          
          .service-button {
            padding: 12px 24px;
            font-size: 14px;
          }
          
          .view-all-button {
            padding: 16px 32px;
            font-size: 16px;
          }
        }

        @media screen and (max-width: 767px) {
          .services-section {
            padding: 40px 16px;
          }
          
          .services-title {
            font-size: clamp(32px, 8vw, 60px);
            margin-bottom: 40px;
          }
          
          .services-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .service-card {
            padding: 20px 16px;
          }
          
          .view-all-button {
            padding: 14px 28px;
            font-size: 15px;
          }
        }

        @media screen and (max-width: 480px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
          
          .service-card {
            padding: 18px 14px;
          }
          
          .service-card h3 {
            font-size: 15px;
          }
          
          .service-card p {
            font-size: 12px;
          }
          
          .service-button {
            padding: 10px 20px;
            font-size: 13px;
          }
        }

        /* Brands Section */
        .brands-section {
          padding: 80px 0;
          background-color: #002b36;
          overflow: hidden;
          position: relative;
        }

        .brands-container {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
          padding: 0 30px;
        }

        .brands-title {
          color: #fff;
          font-family: "Lexend", sans-serif;
          font-weight: 600;
          font-size: clamp(32px, 5vw, 48px);
          margin-bottom: 60px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .brands-slider {
          position: relative;
          overflow: hidden;
          width: 100%;
          height: 120px;
          mask: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }

        .brands-track {
          display: flex;
          align-items: center;
          gap: 80px;
          animation: slideLeft 30s linear infinite;
          width: fit-content;
        }

        .brand-logo {
          height: 60px;
          width: auto;
          max-width: 150px;
          object-fit: contain;
          filter: grayscale(100%) brightness(0.8);
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .brand-logo:hover {
          filter: grayscale(0%) brightness(1);
          transform: scale(1.1);
        }

        @keyframes slideLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Brands Section Responsive */
        @media screen and (max-width: 991px) {
          .brands-section {
            padding: 60px 20px;
          }
          
          .brands-title {
            font-size: clamp(28px, 5vw, 40px);
            margin-bottom: 40px;
          }
          
          .brands-slider {
            height: 100px;
          }
          
          .brand-logo {
            height: 50px;
          }
          
          .brands-track {
            gap: 60px;
          }
        }

        @media screen and (max-width: 767px) {
          .brands-section {
            padding: 40px 16px;
          }
          
          .brands-title {
            font-size: clamp(24px, 6vw, 32px);
            margin-bottom: 30px;
          }
          
          .brands-slider {
            height: 80px;
          }
          
          .brand-logo {
            height: 40px;
            max-width: 120px;
          }
          
          .brands-track {
            gap: 40px;
          }
        }

        @media screen and (max-width: 480px) {
          .brands-slider {
            height: 70px;
          }
          
          .brand-logo {
            height: 35px;
            max-width: 100px;
          }
          
          .brands-track {
            gap: 30px;
          }
        }

        /* CTA Section Styles */
        .cta-section {
          padding: 120px 30px;
          background: linear-gradient(135deg, #073642 0%, #002b36 100%);
          position: relative;
          overflow: hidden;
        }

        .cta-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 30% 70%, rgba(211, 54, 130, 0.15) 0%, transparent 50%),
                      radial-gradient(circle at 70% 30%, rgba(203, 75, 22, 0.1) 0%, transparent 50%);
          z-index: 0;
        }

        .cta-container {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .cta-title {
          font-family: "Lexend", sans-serif;
          font-weight: 800;
          font-size: 3.5rem;
          color: #ffffff;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .cta-subtitle {
          font-family: "Lexend", sans-serif;
          font-size: 1.25rem;
          line-height: 1.6;
          color: #e0e0e0;
          margin-bottom: 50px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-buttons {
          display: flex;
          gap: 25px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 18px 36px;
          font-family: "Lexend", sans-serif;
          font-weight: 600;
          font-size: 1.125rem;
          text-decoration: none;
          border-radius: 50px;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
          overflow: hidden;
          min-width: 200px;
        }

        .cta-button:not(.secondary) {
          background: linear-gradient(135deg, #d33682 0%, #cb4b16 100%);
          color: #ffffff;
          border: 2px solid transparent;
          box-shadow: 0 8px 32px rgba(211, 54, 130, 0.3);
        }

        .cta-button:not(.secondary):hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(211, 54, 130, 0.4);
          background: linear-gradient(135deg, #e63c96 0%, #dc5c2a 100%);
        }

        .cta-button.secondary {
          background: rgba(0, 0, 0, 0.4);
          color: #ffffff;
          border: 2px solid rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .cta-button.secondary:hover {
          background: rgba(0, 0, 0, 0.6);
          border-color: rgba(255, 255, 255, 0.6);
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
        }

        /* CTA Section Responsive */
        @media screen and (max-width: 991px) {
          .cta-section {
            padding: 80px 20px;
          }
          
          .cta-title {
            font-size: 2.5rem;
            margin-bottom: 1rem;
          }
          
          .cta-subtitle {
            font-size: 1.125rem;
            margin-bottom: 40px;
          }
          
          .cta-buttons {
            gap: 20px;
          }
          
          .cta-button {
            padding: 16px 32px;
            font-size: 1rem;
            min-width: 180px;
          }
        }

        @media screen and (max-width: 767px) {
          .cta-section {
            padding: 60px 16px;
          }
          
          .cta-title {
            font-size: 2rem;
            margin-bottom: 1rem;
          }
          
          .cta-subtitle {
            font-size: 1rem;
            margin-bottom: 30px;
          }
          
          .cta-buttons {
            flex-direction: column;
            align-items: center;
            gap: 15px;
          }
          
          .cta-button {
            padding: 14px 28px;
            font-size: 0.95rem;
            min-width: 200px;
            width: 100%;
            max-width: 280px;
          }
        }

        @media screen and (max-width: 480px) {
          .cta-title {
            font-size: 1.75rem;
          }
          
          .cta-subtitle {
            font-size: 0.9rem;
          }
          
          .cta-button {
            padding: 12px 24px;
            font-size: 0.9rem;
            min-width: auto;
            width: 100%;
            max-width: 260px;
          }
        }
      `}</style>

      <div className="photography-banner">
        <main>
          <section className="info-section">
            <div className="left-part">
              <h1>
                <span className="d-flex">
                  {["C", "R", "I", "A", "M", "O", "S"].map((char, index) => (
                    <span key={index} className="char tracking-tighter" style={{ animationDelay: `${index * 0.08}s` }}>
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </span>
                <span className="text tracking-tighter">{currentText}</span>
              </h1>
              <p className="lexend tracking-widest">
                IDEIAS EM ESTRATÉGIAS DIGITAIS QUE GERAM RESULTADOS REAIS PARA SUA MARCA
              </p>
              <a href="https://wa.me/5511988913315" className="book-link">
                <span className="linktext tracking-tighter text-3xl">FALE CONOSCO</span>
                <span className="arrow">
                  <span></span>
                </span>
              </a>
            </div>
            <div className="right-part">
              <img
                src="/images/young-adult-performing-modern-dance-choreography.jpg"
                alt="Jovem performando dança moderna"
                className="hero-image"
              />
              <div className="particles-container">
                {Array.from({ length: 20 }, (_, i) => (
                  <div
                    key={i}
                    className="particle"
                    style={{
                      width: `${Math.random() * 8 + 4}px`,
                      height: `${Math.random() * 8 + 4}px`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDuration: `${Math.random() * 20 + 15}s`,
                      animationDelay: `${Math.random() * 10}s`,
                    }}
                  />
                ))}
              </div>
              <div className="bg-line">
                <img
                  src="https://www.yudiz.com/codepen/photography-banner/wave.svg"
                  alt="Line"
                  style={{ filter: "hue-rotate(280deg) saturate(1.5)" }}
                />
                <img
                  src="https://www.yudiz.com/codepen/photography-banner/wave.svg"
                  alt="Line"
                  style={{ filter: "hue-rotate(280deg) saturate(1.5)" }}
                />
              </div>
              <div className="bg-dash-circle">
                <img
                  src="https://www.yudiz.com/codepen/photography-banner/dash-circle.svg"
                  alt="dash-circle"
                  style={{ filter: "hue-rotate(280deg) saturate(1.5)" }}
                />
              </div>
            </div>
          </section>

          <section className="features-section">
            <div className="features-container">
              <div className="features-content">
                <h2>
                  Se Encante <span className="highlight">conosco</span>
                </h2>
              </div>
              <ul className="features-list">
                <li className="feature-item">
                  <div className="feature-icon">15+</div>
                  <div className="feature-text">
                    <h3>Anos de Experiência</h3>
                    <p className="font-light tracking-wider">
                      Mais de 15 anos transformando marcas e criando estratégias digitais de sucesso
                    </p>
                  </div>
                </li>
                <li className="feature-item">
                  <div className="feature-icon">★</div>
                  <div className="feature-text">
                    <h3>Grandes Marcas Confiam</h3>
                    <p className="tracking-wider">
                      TubeLab e seus associados, YLE US e YLE Canada, Ipê das Letras e outras grandes marcas e agências entre Brasil, Inglaterra, Portugal, Canadá e Estados Unidos já escolheram nossos serviços
                    </p>
                  </div>
                </li>
                <li className="feature-item">
                  <div className="feature-icon">SR</div>
                  <div className="feature-text">
                    <h3>Equipe Sênior Dedicada</h3>
                    <p className="tracking-wider">
                      Profissionais experientes e especializados focados no sucesso do seu projeto, com mais de 12 anos de mercado digital trazendo resultados expressivos
                    </p>
                  </div>
                </li>
                <li className="feature-item">
                  <div className="feature-icon">∞</div>
                  <div className="feature-text">
                    <h3>Soluções Personalizadas</h3>
                    <p className="tracking-wider">
                      Estratégias únicas desenvolvidas especificamente para as necessidades da sua marca
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section className="services-section">
            <div className="services-container">
              <h2 className="services-title">Nossos Serviços</h2>
              <div className="services-grid">
                <div className="service-card">
                  <div className="service-number">01</div>
                  <h3 className="service-title">Marketing Digital</h3>
                  <p className="service-description">
                    Estratégias completas para aumentar sua presença digital e gerar mais leads qualificados.
                  </p>
                  <a
                    href={`https://wa.me/5511988913315?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre Marketing Digital da Enchantè")}`}
                    className="service-button"
                  >
                    Saiba Mais
                  </a>
                </div>

                <div className="service-card" style={{ position: "relative" }}>
                  <div className="hot-badge">🔥 Quente</div>
                  <div className="service-number">02</div>
                  <h3 className="service-title">Mídias Sociais</h3>
                  <p className="service-description">
                    Gestão completa das suas redes sociais com conteúdo estratégico e engajamento real.
                  </p>
                  <a
                    href={`https://wa.me/5511988913315?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre Mídias Sociais da Enchantè")}`}
                    className="service-button"
                  >
                    Saiba Mais
                  </a>
                </div>

                <div className="service-card" style={{ position: "relative" }}>
                  <div className="hot-badge">🔥 Quente</div>
                  <div className="service-number">03</div>
                  <h3 className="service-title">Assessoria de Imprensa</h3>
                  <p className="service-description">
                    Relacionamento com a mídia e construção de uma imagem sólida para sua marca.
                  </p>
                  <a
                    href={`https://wa.me/5511988913315?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre Assessoria de Imprensa da Enchantè")}`}
                    className="service-button"
                  >
                    Saiba Mais
                  </a>
                </div>

                <div className="service-card">
                  <div className="service-number">04</div>
                  <h3 className="service-title">Consultoria de Vendas</h3>
                  <p className="service-description">
                    Análise e melhoria dos seus processos comerciais para maximizar resultados.
                  </p>
                  <a
                    href={`https://wa.me/5511988913315?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre Consultoria de Vendas da Enchantè")}`}
                    className="service-button"
                  >
                    Saiba Mais
                  </a>
                </div>

                <div className="service-card">
                  <div className="service-number">05</div>
                  <h3 className="service-title">Consultoria Financeira</h3>
                  <p className="service-description">
                    Planejamento financeiro estratégico para o crescimento sustentável do seu negócio.
                  </p>
                  <a
                    href={`https://wa.me/5511988913315?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre Consultoria Financeira da Enchantè")}`}
                    className="service-button"
                  >
                    Saiba Mais
                  </a>
                </div>

                <div className="service-card">
                  <div className="service-number">06</div>
                  <h3 className="service-title">Conteúdo</h3>
                  <p className="service-description">
                    Criação de conteúdo relevante e estratégico que conecta sua marca ao público.
                  </p>
                  <a
                    href={`https://wa.me/5511988913315?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre Conteúdo da Enchantè")}`}
                    className="service-button"
                  >
                    Saiba Mais
                  </a>
                </div>

                <div className="service-card">
                  <div className="service-number">07</div>
                  <h3 className="service-title">Publicidade Personalizada</h3>
                  <p className="service-description">
                    Campanhas publicitárias únicas e criativas que destacam sua marca no mercado.
                  </p>
                  <a
                    href={`https://wa.me/5511988913315?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre Publicidade Personalizada da Enchantè")}`}
                    className="service-button"
                  >
                    Saiba Mais
                  </a>
                </div>

                <div className="service-card">
                  <div className="service-number">08</div>
                  <h3 className="service-title">Design Gráfico/Printing</h3>
                  <p className="service-description">
                    Criação de materiais gráficos impressos e digitais com design profissional e impactante.
                  </p>
                  <a
                    href={`https://wa.me/5511988913315?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre Design Gráfico/Printing da Enchantè")}`}
                    className="service-button"
                  >
                    Saiba Mais
                  </a>
                </div>

                <div className="service-card">
                  <div className="service-number">09</div>
                  <h3 className="service-title">Identidade Visual</h3>
                  <p className="service-description">
                    Desenvolvimento completo da identidade visual da sua marca, do conceito à aplicação.
                  </p>
                  <a
                    href={`https://wa.me/5511988913315?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre Identidade Visual da Enchantè")}`}
                    className="service-button"
                  >
                    Saiba Mais
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="brands-section">
            <div className="brands-container">
              <h2 className="brands-title">Marcas que Confiaram em Nós</h2>
              <div className="brands-slider">
                <div className="brands-track">
                  <img src="/images/brand-bic.png" alt="BIC" className="brand-logo" />
                  <img src="/images/brand-contentia.png" alt="Contentia" className="brand-logo" />
                  <img src="/images/brand-historiasreais.png" alt="Contentia" className="brand-logo" />
                  <img src="/images/brand-tubelab.jpg" alt="Contentia" className="brand-logo" />
                  <img src="/images/brand-mente.jpg" alt="Contentia" className="brand-logo" />
                  <img src="/images/brand-geometric.png" alt="Cliente" className="brand-logo" />
                  <img src="/images/brand-institution.png" alt="Cliente" className="brand-logo" />
                  <img
                    src="/images/brand-white.png"
                    alt="Cliente"
                    className="brand-logo"
                    style={{ filter: "invert(1) grayscale(100%) brightness(0.8)" }}
                  />
                  {/* Duplicate logos for seamless loop */}
                  <img src="/images/brand-bic.png" alt="BIC" className="brand-logo" />
                  <img src="/images/brand-contentia.png" alt="Contentia" className="brand-logo" />
                  <img src="/images/brand-geometric.png" alt="Cliente" className="brand-logo" />
                  <img src="/images/brand-institution.png" alt="Cliente" className="brand-logo" />
                  <img
                    src="/images/brand-white.png"
                    alt="Cliente"
                    className="brand-logo"
                    style={{ filter: "invert(1) grayscale(100%) brightness(0.8)" }}
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="cta-section">
            <div className="cta-container">
              <h2 className="cta-title text-center">PRONTO PARA CRESCER?</h2>
              <p className="cta-subtitle">
                Junte-se às grandes marcas que já transformaram seus resultados com a Enchantè. Sua jornada de sucesso
                digital começa agora.
              </p>
              <div className="cta-buttons">
                <a
                  href={`https://wa.me/5511988913315?text=${encodeURIComponent("Olá! Gostaria de uma consultoria gratuita com a Enchantè")}`}
                  className="cta-button"
                >
                  CONSULTORIA GRATUITA
                </a>
                <a
                  href={`https://wa.me/5511988913315?text=${encodeURIComponent("Olá! Gostaria de conhecer todos os serviços da Enchantè")}`}
                  className="cta-button secondary"
                >
                  VER TODOS OS SERVIÇOS
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default PhotographyBanner
