export default (props) => {
  return (
  <div class="bg-white flex w-fit text-xs md:text-md py-2 px-4 mb-2 rounded space-x-4 underline shadow-lg">
    {props.alternates?.map((alt) => (
      <a className={alt.lang === props.lang ? "font-bold" : ""} href={alt.url}>
        {alt.text['language.'+alt.lang]}
      </a>
    ))}
    
    <a href="#keineRakeden" id="stop-rakeden">Stop Rakeden</a>
    <a href="#rakeden" id="start-rakeden">Start Rakeden</a>
  </div>
)};
