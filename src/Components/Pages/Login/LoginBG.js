import React from "react";
import "./Login.css";

function LoginBG() {
  return (
    <div className="grid-container">
      <img
        alt="Album-Cover"
        className="grid-img"
        src="https://songsearch-2916.kxcdn.com/static/albums/2020/02/26/18/673387_300x300.jpg"
      />
      <img
        alt="Album-Cover"
        className="grid-img"
        src="https://upload.wikimedia.org/wikipedia/en/3/36/21_Savage_%E2%80%93_I_Am_Greater_Than_I_Was.png"
      />
      <img
        alt="Album-Cover"
        className="grid-img"
        src="https://upload.wikimedia.org/wikipedia/en/2/2a/2014ForestHillsDrive.jpg"
      />
      <img
        alt="Album-Cover"
        className="grid-img"
        src="https://upload.wikimedia.org/wikipedia/en/1/1f/Eternal_Atake_Lil_Uzi_Vert.jpg"
      />

      <img
        alt="Album-Cover"
        className="grid-img"
        src="https://upload.wikimedia.org/wikipedia/en/d/d3/JColeKOD.jpg"
      />

      <img
        alt="Album-Cover"
        className="grid-img"
        src="https://i.scdn.co/image/ab67616d0000b2739e1cfc756886ac782e363d79"
      />
      <img
        alt="Album-Cover"
        className="grid-img"
        src="https://upload.wikimedia.org/wikipedia/en/9/9e/BobbyTarantino2.jpg"
      />
      <img
        alt="Album-Cover"
        className="grid-img"
        src="https://upload.wikimedia.org/wikipedia/en/b/b2/Lorde_-_Melodrama.png"
      />
      <img
        alt="Album-Cover"
        className="grid-img"
        src="https://upload.wikimedia.org/wikipedia/en/b/bb/Jay-Z_-_The_Blueprint_3.jpg"
      />
      <img
        alt="Album-Cover"
        className="grid-img"
        src="https://upload.wikimedia.org/wikipedia/en/9/9b/Lil_Uzi_Vert_vs_the_World_2_cover_art.jpg"
      />
      <img
        alt="Album-Cover"
        className="grid-img"
        src="https://upload.wikimedia.org/wikipedia/en/f/f3/Trench_Twenty_One_Pilots.png"
      />
      <img
        alt="Album-Cover"
        className="grid-img"
        src="https://pyxis.nymag.com/v1/imgs/6d7/008/b20deeaf26fe2cdf0796d1e0ab4d5473bd-05-starboy.rsquare.w700.jpg"
      />
      <img
        alt="Album-Cover"
        className="grid-img"
        src="https://media.pitchfork.com/photos/609c2e93853a96fc7df31dec/1:1/w_320/J-Cole-The-Off-Season.jpg"
      />
      <img
        alt="Album-Cover"
        className="grid-img"
        src="https://i1.sndcdn.com/artworks-000516309615-7s38hc-t500x500.jpg"
      />
      <img
        alt="Album-Cover"
        className="grid-img"
        src="https://i.scdn.co/image/ab67616d0000b27383c726c3768d0981c76acd38"
      />
      <img
        alt="Album-Cover"
        className="grid-img"
        src="https://upload.wikimedia.org/wikipedia/en/f/f1/808s_%26_Heartbreak.png"
      />
      <img
        alt="Album-Cover"
        className="grid-img"
        src="data:Album-Cover/
       jpeg;base64,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"
      />
      <img
        alt="Album-Cover"
        className="grid-img"
        src="https://upload.wikimedia.org/wikipedia/en/7/70/Graduation_%28album%29.jpg"
      />
      <img
        alt="Album-Cover"
        className="grid-img"
        src="https://upload.wikimedia.org/wikipedia/en/f/f6/Kendrick_Lamar_-_To_Pimp_a_Butterfly.png"
      />
      <img
        alt="Album-Cover"
        className="grid-img"
        src="https://upload.wikimedia.org/wikipedia/en/c/c9/Logic_-_Bobby_Tarantino_%28album_cover%29.jpg"
      />
      <img
        alt="Album-Cover"
        className="grid-img"
        src="https://upload.wikimedia.org/wikipedia/en/6/65/Luv_Is_Rage_2_cover.jpg"
      />
      <img
        alt="Album-Cover"
        className="grid-img"
        src="https://thesource.com/wp-content/uploads/2019/11/mbdtf.jpg"
      />
      <img
        alt="Album-Cover"
        className="grid-img"
        src="https://upload.wikimedia.org/wikipedia/en/c/c6/Die_Lit_by_Playboi_Carti.jpg"
      />
      <img
        alt="Album-Cover"
        className="grid-img"
        src="https://upload.wikimedia.org/wikipedia/en/7/7d/Blurryface_by_Twenty_One_Pilots.png"
      />
      <img
        alt="Album-Cover"
        className="grid-img"
        src="https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1594942678203-T2DZHNP3HW0BDATHQB5Z/SamSpratt_NoPressure_Cover_Final+copy.jpg?format=1500w"
      />
      <img
        alt="Album-Cover"
        className="grid-img"
        src="https://upload.wikimedia.org/wikipedia/en/4/44/Kids_See_Ghosts_Cover.png"
      />
      <img
        alt="Album-Cover"
        className="grid-img"
        src="https://images-na.ssl-images-amazon.com/images/I/81sKEPIbmxL._SL1500_.jpg"
      />
      <img
        alt="Album-Cover"
        className="grid-img"
        src="https://upload.wikimedia.org/wikipedia/en/5/51/Kendrick_Lamar_-_Damn.png"
      />
    </div>
  );
}

export default LoginBG;
