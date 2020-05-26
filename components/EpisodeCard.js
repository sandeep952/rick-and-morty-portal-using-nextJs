import React from "react";
import Link from 'next/link'
const EpisodeCard = ({ episode }) => {
  return (
    <div className="column is-6-tablet is-4-desktop is-3-widescreen">
      <Link href={`/episode/[id]`} as={`episode/${episode.id}`}>
        <a>
          <div className="card">
            <div className="card-header">
              <p className="card-header-title has-text-centered">
                {episode.name}
              </p>
            </div>
            <div className="card-content">
              <div className="columns has-text-centered">
                <div className="column ">{episode.episode}</div>
                <div className="column">{episode.air_date}</div>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};
export default EpisodeCard;
