

export default function SubAbout({ params }) {
    const decodedSlug = decodeURIComponent(params.slug);

    return (
        <div className="prose lg:prose-lg">
            <h1 className="capitalize">{decodedSlug}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet risus feugiat in ante metus dictum at tempor. Non consectetur a erat nam at lectus. Ultrices dui sapien eget mi. Integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Dui nunc mattis enim ut. Tellus mauris a diam maecenas sed enim ut sem. Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Orci a scelerisque purus semper eget duis. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Mattis vulputate enim nulla aliquet porttitor lacus luctus. Tempus quam pellentesque nec nam aliquam sem. Sapien et ligula ullamcorper malesuada. Neque gravida in fermentum et sollicitudin ac orci phasellus egestas. Sapien nec sagittis aliquam malesuada.</p>
        </div>
    )
}
