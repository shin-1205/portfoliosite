import Frueats from "../../../assets/FruEats.jpg";
import Erico from "../../../assets/Erico.png";
import Lanna from "../../../assets/lanna2.png";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function () {
    return (
        <>
            <section id="works" className="works">
                <div className="container">
                    <h2>Works</h2>
                    <h3>
                        Basic認証
                        <span>ユーザー：test 、パス：admin</span>
                    </h3>

                    <a
                        className="box"
                        href="https://frueats.silly-shin.net"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <div className="left">
                            <a>
                                <Image
                                    src={Frueats}
                                    width={400}
                                    alt="サイト画像"
                                    priority
                                />
                            </a>
                        </div>
                        <div className="right">
                            <a
                                href="https://frueats.silly-shin.net"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <button className="bubbly-button">
                                    サイトをみる
                                </button>
                            </a>

                            <ul>
                                <li>PHP</li>
                                <li>Sass</li>
                                <li>JavaScript</li>
                                <li>WordPress</li>
                                <li>Figma</li>
                            </ul>
                        </div>
                    </a>

                    <a
                        className="box"
                        href="https://erico.silly-shin.net"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <div className="left">
                            <a>
                                <Image
                                    src={Erico}
                                    width={400}
                                    alt="サイト画像"
                                    priority
                                />
                            </a>
                        </div>
                        <div className="right">
                            <a
                                href="https://erico.silly-shin.net"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <button className="bubbly-button">
                                    サイトをみる
                                </button>
                            </a>
                            <ul>
                                <li>PHP</li>
                                <li>Sass</li>
                                <li>JavaScript</li>
                                <li>WordPress</li>
                                <li>Figma</li>
                            </ul>
                        </div>
                    </a>

                    <a
                        className="box"
                        href="https://lanna-thaimassage.jp"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <div className="left">
                            <a>
                                <Image
                                    src={Lanna}
                                    width={400}
                                    alt="サイト画像"
                                    priority
                                />
                            </a>
                        </div>
                        <div className="right">
                            <a
                                href="https://lanna-thaimassage.jp"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <button className="bubbly-button">
                                    サイトをみる
                                </button>
                            </a>
                            <ul>
                                <li>PHP</li>
                                <li>Sass</li>
                                <li>WordPress</li>
                            </ul>
                        </div>
                    </a>
                </div>
            </section>

            <footer>
                <p>My Portfolio</p>
                <div className="container"></div>
            </footer>
        </>
    );
}
