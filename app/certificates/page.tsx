import { Yesteryear } from "next/font/google";

export default function Home() {
    const certificates = [
      { id: '', title: 'Certificate 1', description: 'Description of Certificate 1', link: '/path/to/certificate1.pdf', year: 2021 },
      { id: '', title: 'Certificate 2', description: 'Description of Certificate 2', link: '/path/to/certificate2.pdf', year: 2022 },
      { id: '', title: 'Certificate 3', description: 'Description of Certificate 3', link: '/path/to/certificate3.pdf', year: 2022 },
      // Add more certificates as needed
    ];

    interface Certificate {
      id: string;
      title: string;
      description: string;
      link: string;
      year: number;
    }

    interface CertificateMap {
      [year: number]: JSX.Element[];
    }
  
    return (
      <div className='w-full lg:w-2/3'>
        <h1 className='text-2xl font-bold mb-4'>My Certificates</h1>
        <ul>
          {Object.entries(certificates.reduce<CertificateMap>((acc, cert, index) => {
            const year = cert.year;
            if (!acc[year]) {
              acc[year] = [];
            }
            acc[year].push(
              <li key={index} className='mb-4'>
                <h2 className='text-xl font-semibold'>{cert.title}</h2>
                <p>{cert.description}</p>
                <a href={cert.link} className='text-blue-500' download>Download</a>
              </li>
            );
            return acc;
          }, {}))
          .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
          .map(([year, certs]) => (
            <div key={year}>
              <h2 className='text-lg font-bold mt-6'>{year}</h2>
              <ul>{certs}</ul>
            </div>
          ))}
        </ul>
      </div>
    )
  }