import useChess from "../hooks/useChess";
import ArrowTopRightSvg from "../svgs/ArrowTopRightSvg";
import BlitzChessSvg from "../svgs/BlitzChessSvg";
import BulletChessSvg from "../svgs/BulletChessSvg";
import RapidChessSvg from "../svgs/RapidChessSvg";

export default function FindMeChess() {

  const { userProfile, userStats } = useChess();

  const blitzRating = userStats.chess_blitz ? userStats.chess_blitz.last.rating : 0;
  const rapidRating = userStats.chess_rapid ? userStats.chess_rapid.last.rating : 0;
  const bulletRating = userStats.chess_bullet ? userStats.chess_bullet.last.rating : 0;

  return (
    <li className="relative group mb-2 transition duration-150 hover:scale-1010 overflow-hidden w-min">
      <a className="border-2 rounded-2xl dark:border-stroke-dark px-2 py-2 md:px-4 md:py-4 flex flex-col items-center" target="_blank" href="https://www.chess.com/member/luanders0n"
      >
        <ArrowTopRightSvg />
        <div className="flex flex-col items-center">
          <img className="h-10 w-10 md:h-12 md:w-12 rounded-full" src={userProfile.avatar} alt="chess.com profile image" />
          <p className="text-xs md:text-sm dark:text-main-white-dark mt-2">{userProfile.username}</p>
          <div className="flex flex-row gap-6 my-2 md:my-4">
            <div className="flex flex-col items-center">
              <BulletChessSvg />
              <span className="text-xs md:text-sm dark:text-main-white-dark mt-1">{bulletRating}</span>
            </div>
            <div className="flex flex-col items-center">
              <BlitzChessSvg />
              <span className="text-xs md:text-sm dark:text-main-white-dark mt-1">{blitzRating}</span>
            </div>
            <div className="flex flex-col items-center">
              <RapidChessSvg />
              <span className="text-xs md:text-sm dark:text-main-white-dark mt-1">{rapidRating}</span>
            </div>
          </div>
        </div>
        <img src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/NathanielGreen/php0hWd9E.png" alt="chess.com logo" className="h-5 md:h-7"/>
      </a>
    </li>
  )
}