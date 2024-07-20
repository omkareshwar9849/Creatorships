import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';

const BusinessDetails = () => {
    const [businesses, setBusinesses] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const host = process.env.REACT_APP_BACKEND_HOST;
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate('/signin');
        } else {
            fetchBusinesses();
        }
        // eslint-disable-next-line
    }, []);

    const fetchBusinesses = (pageNumber = 1) => {
        fetch(`${host}/api/form/getBusiness?page=${pageNumber}&limit=4`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
        })
            .then(response => response.json())
            .then(data => {
                if (pageNumber === 1) {
                    setBusinesses(data.forms);
                } else {
                    setBusinesses(prevBusinesses => [...prevBusinesses, ...data.forms]);
                }
                setPage(data.page);
                setHasMore(pageNumber < data.pages);
            })
            .catch(error => console.error('Error fetching business details:', error));
    };

    const fetchMoreData = () => {
        fetchBusinesses(page + 1);
    };

    const handleContactClick = (email) => {
        window.location.href = `mailto:${email}`;
    };

    return (
        <section className="w-full pb-12 md:pb-24 lg:pb-32">
            <div className="container max-w-6xl px-4 md:px-6 mx-auto">
                <div className="space-y-8">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">Business Details</h2>
                        <p className="mt-2 text-muted-foreground text-center">
                            Review the submitted business information for the Creatorships platform.
                        </p>
                    </div>
                    <InfiniteScroll
                        dataLength={businesses.length}
                        next={fetchMoreData}
                        hasMore={hasMore}
                        loader={<h4>Loading...</h4>}
                        endMessage={<p style={{ textAlign: 'center' }}>No more businesses to display</p>}
                    >
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            {businesses.map((business, index) => (
                                <BusinessCard
                                    key={index}
                                    imgSrc={`https://avatar.iran.liara.run/username?username=${business.businessName}`}
                                    altText={business.businessName}
                                    companyName={business.businessName}
                                    industry={business.industry}
                                    description={business.description}
                                    website={business.website}
                                    contact={business.contactPerson}
                                    location={business.location}
                                    goal={business.partnershipGoal}
                                    equity={business.equityOffered}
                                    creatorTypes="N/A"
                                    email={business.email}
                                    onContactClick={() => handleContactClick(business.email)}
                                />
                            ))}
                        </div>
                    </InfiniteScroll>
                </div>
            </div>
        </section>
    );
};

const BusinessCard = ({ imgSrc, altText, companyName, industry, description, website, contact, location, goal, equity, creatorTypes, email, onContactClick }) => (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full">
        <div className="flex flex-col space-y-1.5 p-6">
            <div className="flex items-center gap-4">
                <span className="relative flex shrink-0 overflow-hidden rounded-full w-12 h-12">
                    <img className="aspect-square h-full w-full" alt={altText} src={imgSrc} />
                </span>
                <div>
                    <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight truncate max-w-full">{companyName}</h3>
                    <p className="text-sm text-muted-foreground">{industry}</p>
                </div>
            </div>
        </div>
        <div className="p-6">
            <div className="grid gap-2">
                <Detail title="Business Description" detail={description} />
                <Detail title="Website URL" detail={website} />
                <Detail title="Contact Person" detail={contact} />
                <Detail title="Business Location" detail={location} />
                <Detail title="Partnership Goal" detail={goal} />
                <Detail title="Equity Offered" detail={equity} />
                <Detail title="Preferred Creator Types" detail={creatorTypes} />
                <Detail title="Email" detail={email} />
            </div>
        </div>
        <div className="flex items-center p-6">
            <button
                onClick={onContactClick}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
                Contact
            </button>
        </div>
    </div>
);

const Detail = ({ title, detail }) => (
    <div className="grid gap-1">
        <div className="text-sm font-medium">{title}</div>
        <p className="text-sm">{detail}</p>
    </div>
);

export default BusinessDetails;
