
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Place } from '@/utils/placesData';
import { MapPin } from 'lucide-react';

interface TopPlacesProps {
  places: Place[];
  countryName: string;
}

const TopPlaces: React.FC<TopPlacesProps> = ({ places, countryName }) => {
  return (
    <div className="mt-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight">Top 10 Places to Visit in {countryName}</h2>
        <p className="text-muted-foreground">Discover the must-visit destinations in {countryName} for your travel planning.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {places.map((place, index) => (
          <Card key={index} className="shadow-sm overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-primary" />
                <CardTitle>{place.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm">{place.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TopPlaces;
