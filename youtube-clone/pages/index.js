import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>YouTube</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="stylesheet" href="/stylesheets/general.css" />
        <link rel="stylesheet" href="/stylesheets/grid.css" />
        <link rel="stylesheet" href="/stylesheets/header.css" />
        <link rel="stylesheet" href="/stylesheets/nav.css" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <header>
            <div className="info-left">
                <button type="button" className="hamburger-button">
                    <img className="hamburger" src="/icons/hamburger-menu.svg" alt="Hamburger menu" />
                </button>
                <img className="logotype" src="/icons/youtube-logo.svg" alt="YouTube logotype" />
            </div>
            <div className="info-middle">
                <div className="center">
                    <div className="research">
                        <input className="searchbar" type="text" placeholder="Search" />
                        <div className="search">
                            <img src="/icons/search.svg" alt="search icon" />
                            <div className="tooltip">Search</div>
                        </div>
                    </div>
                        <button className="mic-button">
                            <img className="mic-icon" src="/icons/voice-search-icon.svg" alt=" mic icon" />
                            <div className="tooltip">Search with your voice</div>
                        </button>
                </div>
            </div>


            <div className="info-right">
                <button className="create">
                    <img src="/icons/upload.svg" alt="Live button" />
                    <div className="tooltip">Create</div>
                </button>
                <button className="apps">
                    <img src="/icons/youtube-apps.svg" alt="YouTube Apps" />
                    <div className="tooltip">Apps</div>
                </button>
                <button className="notifications">
                    <img src="/icons/notifications.svg" alt="Notifications" />
                    <p className="notification">3</p>
                    <div className="tooltip">Notifications</div>
                </button>
                <button className="profile-picture">
                    <a href="/index.html"><img src="/images/profile-pictures/profile-picture.jpeg" alt="Profile Picture" /></a>
                </button>
            </div>
        </header>
        <nav>
            <a className="item">
                <img src="/icons/home.svg" alt="" />
                <p className="title">Home</p>
            </a>
            <a className="item">
                <img src="/icons/explore.svg" alt="" />
                <p className="title">Explore</p>
            </a>
            <a className="item">
                <img src="/icons/subscriptions.svg" alt="" />
                <p className="title">Subscription</p>
            </a>
            <a className="item">
                <img src="/icons/originals.svg" alt="" />
                <p className="title">Originals</p>
            </a>
            <a className="item">
                <img src="/icons/youtube-music.svg" alt="" />
                <p className="title">YouTube Music</p>
            </a>
            <a className="item">
                <img src="/icons/library.svg" alt="" />
                <p className="title">Library</p>
            </a>
        </nav>
        <main className="video-grid">
            <section className="video">
                <div className="thumbnail">
                    <img src="/images/thumbnails/thumbnail.jpeg" alt="The thumbnail of the video." />
                    <p className="timestamp">5:50</p>
                </div>
                <div className="description">
                    <div className="profile-picture">
                        <img src="/images/profile-pictures/profile-picture.jpeg" alt="" />
                    </div>
                    <div className="text">
                        <p className="title">Change Your Life - One Tiny Step at a Time</p>
                        <p className="user">Kurzgesagt - In a Nutshell</p>
                        <div className="views-timestamp">
                            <p className="views">5.3M views &#183;</p>
                            <p className="timestamp">1 month ago </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="video">
                <div className="thumbnail">
                    <img src="/images/thumbnails/thumbnail2.jpeg" alt="The thumbnail of the video." />
                    <p className="timestamp">7:20</p>
                </div>
                <div className="description">
                    <div className="profile-picture">
                        <img src="/images/profile-pictures/profile-picture2.jpeg" alt="" />
                    </div>
                    <div className="text">
                        <p className="title">Tricks with Monument - MAGIC OF THE MONTH -...</p>
                        <p className="user">Zach King</p>
                        <div className="views-timestamp">
                            <p className="views">179k views &#183;</p>
                            <p className="timestamp">2 days ago</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="video">
                <div className="thumbnail">
                    <img src="/images/thumbnails/thumbnail3.jpeg" alt="The thumbnail of the video." />
                    <p className="timestamp">6:31:24</p>
                </div>
                <div className="description">
                    <div className="profile-picture">
                        <img src="/images/profile-pictures/profile-picture3.jpeg" alt="" />
                    </div>
                    <div className="text">
                        <p className="title">HTML & CSS Full Course - Beginner to Pro (2022)</p>
                        <p className="user">SuperSimpleDev</p>
                        <div className="views-timestamp">
                            <p className="views">1.3M views &#183;</p>
                            <p className="timestamp">5 months ago </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="video">
                <div className="thumbnail">
                    <img src="/images/thumbnails/thumbnail4.jpeg" alt="The thumbnail of the video." />
                    <p className="timestamp"></p>
                </div>
                <div className="description">
                    <div className="profile-picture">
                        <img src="/images/profile-pictures/profile-picture4.jpeg" alt="" />
                    </div>
                    <div className="text">
                        <p className="title">Steve Jobs introduces iPhone in 2007</p>
                        <p className="user">John Shroter</p>
                        <div className="views-timestamp">
                            <p className="views">39M views &#183;</p>
                            <p className="timestamp">10 years ago</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="video">
                <div className="thumbnail">
                    <img src="/images/thumbnails/thumbnail5.jpeg" alt="The thumbnail of the video." />
                    <p className="timestamp">5:50</p>
                </div>
                <div className="description">
                    <div className="profile-picture">
                        <img src="/images/profile-pictures/profile-picture5.jpeg" alt="" />
                    </div>
                    <div className="text">
                        <p className="title">Most diamonds set in one ring - 24,679 by SWA Diamonds (India)</p>
                        <p className="user">Guiness World Records</p>
                        <div className="views-timestamp">
                            <p className="views">60k views &#183;</p>
                            <p className="timestamp">7 days ago</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="video">
                <div className="thumbnail">
                    <img src="/images/thumbnails/thumbnail6.jpeg" alt="The thumbnail of the video." />
                    <p className="timestamp">29:36</p>
                </div>
                <div className="description">
                    <div className="profile-picture">
                        <img src="/images/profile-pictures/profile-picture6.jpeg" alt="" />
                    </div>
                    <div className="text">
                        <p className="title">Touring a $32.5 Million Oceanfront California Modern Mansion</p>
                        <p className="user">Enes Yilmazer</p>
                        <div className="views-timestamp">
                            <p className="views">5.3M views &#183;</p>
                            <p className="timestamp">1 month ago </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="video">
                <div className="thumbnail">
                    <img src="/images/thumbnails/thumbnail7.jpeg" alt="The thumbnail of the video." />
                    <p className="timestamp">12:47</p>
                </div>
                <div className="description">
                    <div className="profile-picture">
                        <img src="/images/profile-pictures/profile-picture7.jpeg" alt="" />
                    </div>
                    <div className="text">
                        <p className="title">J'ai testé le MacBook Air (M2) en avant première !</p>
                        <p className="user">TheiCollection</p>
                        <div className="views-timestamp">
                            <p className="views">127k views &#183;</p>
                            <p className="timestamp">2 weeks ago</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="video">
                <div className="thumbnail">
                    <img src="/images/thumbnails/thumbnail8.jpeg" alt="The thumbnail of the video." />
                    <p className="timestamp">11:26</p>
                </div>
                <div className="description">
                    <div className="profile-picture">
                        <img src="/images/profile-pictures/profile-picture8.jpeg" alt="" />
                    </div>
                    <div className="text">
                        <p className="title">Cette méthode va te mettre au travail COMME JAMAIS</p>
                        <p className="user">Kaizen Lane</p>
                        <div className="views-timestamp">
                            <p className="views">30k views &#183;</p>
                            <p className="timestamp">2 weeks ago</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="video">
                <div className="thumbnail">
                    <img src="/images/thumbnails/thumbnail9.jpeg" alt="The thumbnail of the video." />
                    <p className="timestamp">11:26</p>
                </div>
                <div className="description">
                    <div className="profile-picture">
                        <img src="/images/profile-pictures/profile-picture9.jpeg" alt="" />
                    </div>
                    <div className="text">
                        <p className="title">Becoming A Front End Developer Takes Time</p>
                        <p className="user">Josh HiTech</p>
                        <div className="views-timestamp">
                            <p className="views">75k views &#183;</p>
                            <p className="timestamp">1 months ago</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="video">
                <div className="thumbnail">
                    <img src="/images/thumbnails/thumbnail10.jpeg" alt="The thumbnail of the video." />
                    <p className="timestamp">11:26</p>
                </div>
                <div className="description">
                    <div className="profile-picture">
                        <img src="/images/profile-pictures/profile-picture10.jpeg" alt="" />
                    </div>
                    <div className="text">
                        <p className="title">$50,000 Game Of Extreme Hide and Seek - Challenge</p>
                        <p className="user">MrBeast</p>
                        <div className="views-timestamp">
                            <p className="views">100M views &#183;</p>
                            <p className="timestamp">2 years ago</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="video">
                <div className="thumbnail">
                    <img src="/images/thumbnails/thumbnail11.jpeg" alt="The thumbnail of the video." />
                    <p className="timestamp">11:26</p>
                </div>
                <div className="description">
                    <div className="profile-picture">
                        <img src="/images/profile-pictures/profile-picture2.jpeg" alt="" />
                    </div>
                    <div className="text">
                        <p className="title">MAGIC DUEL: Jack Black vs Zach King</p>
                        <p className="user">Kaizen Lane</p>
                        <div className="views-timestamp">
                            <p className="views">30k views &#183;</p>
                            <p className="timestamp">2 week ago</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="video">
                <div className="thumbnail">
                    <img src="/images/thumbnails/thumbnail12.jpeg" alt="The thumbnail of the video." />
                    <p className="timestamp">11:26</p>
                </div>
                <div className="description">
                    <div className="profile-picture">
                        <img src="/images/profile-pictures/profile-picture11.jpeg" alt="" />
                    </div>
                    <div className="text">
                        <p className="title">WATERFALLS HEIGHT in perspective</p>
                        <p className="user">MetaBallStudio</p>
                        <div className="views-timestamp">
                            <p className="views">87k views &#183;</p>
                            <p className="timestamp">5 days ago</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </>
  );
}
