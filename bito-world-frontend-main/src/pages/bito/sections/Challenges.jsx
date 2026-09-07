import React from "react";

const Challenges = () => {
  return (
    <section className="bg-[#F9F7F5]">
      <div className="mx-auto max-w-[1200px] p-[20px] text-[#3A3A3A]">
        <h2
          className="membership-heading text-center text-[#b27f4a]"
        >
          Challenges and the Way Forward
        </h2>

        <div className="flex flex-wrap gap-[20px] max-[600px]:flex-col">
          {/* Challenges */}
          <div className="min-w-[300px] flex-1 rounded-[8px] p-[20px]">
            <strong className="text-[20px] text-[#422a1e]">
              Challenges
            </strong>

            <ul className="m-0 list-none p-0">
              <li className="mb-[15px] list-disc pt-[12px] font-['Neulis'] text-black">
                <strong className="text-[#D0A067]">
                  Infrastructure Investment:
                </strong>{" "}
                Address the need for improved industrial infrastructure.
              </li>

              <li className="mb-[15px] list-disc pt-[12px] font-['Neulis'] text-black">
                <strong className="text-[#D0A067]">
                  Regulatory Hurdles:
                </strong>{" "}
                Navigate and overcome challenges related to regulations and
                policies.
              </li>

              <li className="mb-[15px] list-disc pt-[12px] font-['Neulis'] text-black">
                <strong className="text-[#D0A067]">
                  Equitable Growth:
                </strong>{" "}
                Ensure fair distribution of benefits across various regions.
              </li>
            </ul>
          </div>

          {/* Way Forward */}
          <div className="min-w-[300px] flex-1 rounded-[8px] p-[20px]">
            <strong className="text-[20px] text-[#422a1e]">
              Way Forward
            </strong>

            <ul className="m-0 list-none p-0">
              <li className="mb-[15px] list-disc pt-[12px] font-['Neulis'] text-black">
                <strong className="text-[#D0A067]">
                  Strengthening Partnerships:
                </strong>{" "}
                Build and reinforce partnerships with both public and private
                sector stakeholders.
              </li>

              <li className="mb-[15px] list-disc pt-[12px] font-['Neulis'] text-black">
                <strong className="text-[#D0A067]">
                  Expanding Membership:
                </strong>{" "}
                Increase membership to include a diverse range of industry
                players.
              </li>

              <li className="mb-[15px] list-disc pt-[12px] font-['Neulis'] text-black">
                <strong className="text-[#D0A067]">
                  Policy Advocacy:
                </strong>{" "}
                Continue to advocate for favorable policies that support
                industrial growth and sustainability.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenges;