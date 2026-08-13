 import Link from "next/link";

const features = [
  ["01","Verify first","18+ identity verification before a profile can enter discovery. Verification status is visible; raw identity documents are not."],
  ["02","Match for fit","Compatibility covers values, independence, communication, boundaries, lifestyle, relationship pace and the things each person says truly matter."],
  ["03","Mutual choice","Messaging only opens when both people choose each other. No cold inbox, no popularity auction and no paid safety advantage."],
  ["04","Inclusive by design","Gender identity, orientation and who someone wants to meet are separate fields. Matching respects mutual eligibility rather than assuming heterosexual or binary pairings."],
  ["05","Safety throughout","Block, report, scam detection, date check-ins, evidence preservation and human moderation are built into the service rather than added later."],
  ["06","Privacy by default","Exact location, contact details and identity documents stay hidden. The public profile only shows what a member has chosen to share."]
];

export default function Home() {
  return (
    <main>
      <div className="shell">
        <nav className="nav">
          <div className="brand">
            <div className="brandMark">G</div>
            <div className="brandText">GENEVIEVE</div>
          </div>
          <div className="navLinks">
            <a href="#how">How it works</a>
            <a href="#safety">Safety</a>
            <a href="#pricing">Pricing</a>
            <Link className="btn btnPrimary" href="/onboarding">Create profile</Link>
          </div>
        </nav>

        <section className="hero">
          <div>
            <div className="kicker"><span className="dot"/>Compatibility before chaos</div>
            <h1>Meet people who actually fit.</h1>
            <p className="lede">
              A verified, compatibility-first dating network for adults of every gender and orientation.
              Less endless swiping. More real people, mutual choice, safer meetings and relationships that have room to grow.
            </p>
            <div className="heroActions">
              <Link className="btn btnPrimary" href="/onboarding">Start your profile</Link>
              <Link className="btn btnSoft" href="/discover">See the experience</Link>
            </div>
            <div className="trustRow">
              <span className="trustPill">✓ 18+ only</span>
              <span className="trustPill">✓ ID verified</span>
              <span className="trustPill">✓ Inclusive matching</span>
              <span className="trustPill">✓ Safety tools for everyone</span>
            </div>
          </div>

          <div className="phone" aria-label="GENEVIEVE match preview">
            <div className="phoneInner">
              <div className="phoneTop">
                <div className="miniBrand">GENEVIEVE / DISCOVER</div>
                <div className="avatar"/>
              </div>
              <div className="matchCard">
                <div className="photo">
                  <div className="verified">✓ Identity verified</div>
                </div>
                <div className="cardBody">
                  <div className="matchName">Alex, 42</div>
                  <div className="matchMeta">Brisbane area · Long-term relationship</div>
                  <div className="score">
                    <div className="scoreRing"><b>88%</b></div>
                    <div className="scoreText">
                      <b>Strong potential fit</b>
                      <span>High alignment where you said it matters.</span>
                    </div>
                  </div>
                  <div className="chips">
                    <span className="chip">Independent</span>
                    <span className="chip">Direct communicator</span>
                    <span className="chip">Dogs</span>
                    <span className="chip">Quiet weekends</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how" className="section">
          <div className="sectionHead">
            <div className="eyebrow">How GENEVIEVE works</div>
            <h2>Designed around the person, not the swipe.</h2>
            <p>Attraction still matters. It just stops being the only signal. GENEVIEVE looks for mutual eligibility and meaningful compatibility before opening a connection.</p>
          </div>
          <div className="grid3">
            {features.map(([n,t,d]) => (
              <article className="feature" key={n}>
                <div className="featureNumber">{n}</div>
                <h3>{t}</h3><p>{d}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="safety" className="section">
          <div className="safetyBand">
            <div>
              <div className="eyebrow" style={{color:"#e8d48d"}}>Safety by design</div>
              <h2 style={{fontSize:"3rem"}}>Verified does not mean invulnerable.</h2>
              <p>
                No responsible dating company can guarantee zero harm. GENEVIEVE is designed to make impersonation,
                scams and abuse harder, detect warning patterns and give members fast ways to act.
              </p>
              <Link className="btn btnGold" href="/safety">Open Safety Centre</Link>
            </div>
            <div className="safetyList">
              {["Government-ID provider check","18+ age confirmation","Liveness / selfie match","Duplicate-account detection","Mutual-match messaging only","Scam-language detection","Block & report everywhere","Human moderation queue","Date check-in tools","Evidence & audit trail","Rate limiting & bot controls","No raw ID in profile database"].map(x=><div className="safetyItem" key={x}>✓ {x}</div>)}
            </div>
          </div>
        </section>

        <section id="pricing" className="section">
          <div className="sectionHead">
            <div className="eyebrow">Fair pricing</div>
            <h2>Safety is not a premium feature.</h2>
            <p>The commercial model can earn money without hiding identity verification, reporting or emergency protections behind a subscription.</p>
          </div>
          <div className="pricing">
            <div className="priceCard">
              <h3>Free</h3>
              <div className="price">A$0</div>
              <ul>
                <li>Create and verify a profile</li>
                <li>Compatibility assessment</li>
                <li>Limited curated discovery</li>
                <li>All reporting and safety tools</li>
              </ul>
              <Link className="btn btnSoft" href="/onboarding">Start safely</Link>
            </div>
            <div className="priceCard featured">
              <div className="priceTag">Recommended launch offer</div>
              <h3>Verified Member</h3>
              <div className="price">A$39.99 <small>one time</small></div>
              <ul>
                <li>Mutual-match messaging</li>
                <li>Full curated discovery</li>
                <li>No recurring fee required</li>
                <li>All safety tools included</li>
              </ul>
              <Link className="btn btnPrimary" href="/pricing">Choose one-time access</Link>
            </div>
            <div className="priceCard">
              <h3>GENEVIEVE Plus</h3>
              <div className="price">A$12.99 <small>/ month</small></div>
              <ul>
                <li>Advanced compatibility filters</li>
                <li>More curated introductions</li>
                <li>Private AI conversation support</li>
                <li>Optional incognito controls</li>
              </ul>
              <Link className="btn btnSoft" href="/pricing">Compare plans</Link>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="footerLine">
            <span>GENEVIEVE — public dating platform V1 foundation</span>
            <span>18+ · Safety by design · Privacy by design · Inclusive by design</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
