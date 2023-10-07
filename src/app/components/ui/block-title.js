
export default function BlockTitle({ title, id }) {

    return (
        <>
            <h2 id={id} className={`mb-6 text-lg font-bold flex items-center leading-4`}>
                <span className='block h-4 w-4 striped-bg mr-3'></span>
                {title}
            </h2>
        </>
    )
}
