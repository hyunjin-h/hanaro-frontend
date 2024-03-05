import Link from 'next/link';

export type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

const getPhotos = async () => {
  const id = 1;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?userId=${id}`,
    { cache: 'no-store' }
  );

  return res.json();
};

export default async function Photos() {
  const photos: Photo[] = await getPhotos();
  return (
    <>
      <h1> Photos</h1>
      <div className='grid grid-cols-4'>
        {photos?.map((photo) => (
          //eslint-disable-next-line
          <img
            alt={photo.title}
            className='justify-self-center m-1'
            src={photo.thumbnailUrl}
            key={photo.id}
            onClick={() => {
              <Link href='photos/image'></Link>;
            }}
          />
        ))}
      </div>
    </>
  );
}
