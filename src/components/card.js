import React from "react";

const data = [
  {
    id: 1,
    plan: "FREE",
    cost: 0,
    user: "Single User",
    storage: "50GB",
    projects: "Unlimited Public Projects",
    access: "Community Access",
    unsupported: {
      Private: "Unlimited Private Projets",
      Phone: "Dedicated Phone Support",
      Subdomain: "Free Subdomain",
      Reports: "Monthly Status Report",
    },
  },
  {
    id: 2,
    plan: "PLUS",
    cost: 9,
    user: "5 Users",
    storage: "50GB",
    projects: "Unlimited Public Projects",
    access: "Community Access",
    Private: "Unlimited Private Projets",
    Phone: "Dedicated Phone Support",
    Subdomain: "Free Subdomain",
    unsupported: {
      Reports: "Monthly Status Report",
    },
  },
  {
    id: 3,
    plan: "PRO",
    cost: 49,
    user: "Unlimited Users",
    storage: "50GB",
    projects: "Unlimited Public Projects",
    access: "Community Access",
    Private: "Unlimited Private Projets",
    Phone: "Dedicated Phone Support",
    Subdomain: "Free Subdomain",
    Reports: "Monthly Status Report",
  },
];

const Card = () => {
  return (
    <div className="card">
      {data.map((ele) => (
        <div key={ele.id} className="cards">
          <p className="plan">{ele.plan}</p>
          <h2>${ele.cost}/month</h2>
          <hr className="hr" />
          <div className="cardContent">
            {ele.user && <p>✓ {ele.user}</p>}
            {ele.storage && <p>✓ {ele.storage}</p>}
            {ele.projects && <p>✓ {ele.projects}</p>}
            {ele.access && <p>✓ {ele.access}</p>}
            {ele.Private && <p>✓ {ele.Private}</p>}
            {ele.Phone && <p>✓ {ele.Phone}</p>}
            {ele.Subdomain && <p>✓ {ele.Subdomain}</p>}
            {ele.Reports && <p>✓ {ele.Reports}</p>}
            {ele.unsupported && (
              <div style={{ color: "grey" }}>
                {Object.entries(ele.unsupported).map(([key, value]) => (
                  <p key={key}>✕ {value}</p>
                ))}
              </div>
            )}
          </div>
          <button className="button">BUTTON</button>
        </div>
      ))}
    </div>
  );
};

export default Card;
