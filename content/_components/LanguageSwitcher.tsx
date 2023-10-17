export default (props) => (
  <div class="bg-white w-fit py-2 px-4 mb-2 rounded space-x-4 underline">
    {props.alternates?.map((alt) => (
      <a className={alt.lang === props.lang ? "font-bold" : ""} href={alt.url}>
        {alt.text.language}
      </a>
    ))}
  </div>
);
