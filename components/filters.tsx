'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { categories } from '@/lib/products';

interface FiltersProps {
  onFiltersChange: (filters: {
    categories: string[];
    priceRange: [number, number];
    ageRanges: string[];
  }) => void;
}

export function Filters({ onFiltersChange }: FiltersProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [selectedAgeRanges, setSelectedAgeRanges] = useState<string[]>([]);

  const ageRanges = ['0-2 años', '3-5 años', '6-8 años', '9-12 años', '12+ años'];

  const handleCategoryChange = (category: string, checked: boolean) => {
    const newCategories = checked
      ? [...selectedCategories, category]
      : selectedCategories.filter(c => c !== category);
    
    setSelectedCategories(newCategories);
    onFiltersChange({
      categories: newCategories,
      priceRange,
      ageRanges: selectedAgeRanges
    });
  };

  const handlePriceChange = (value: number[]) => {
    const newRange: [number, number] = [value[0], value[1]];
    setPriceRange(newRange);
    onFiltersChange({
      categories: selectedCategories,
      priceRange: newRange,
      ageRanges: selectedAgeRanges
    });
  };

  const handleAgeRangeChange = (ageRange: string, checked: boolean) => {
    const newAgeRanges = checked
      ? [...selectedAgeRanges, ageRange]
      : selectedAgeRanges.filter(a => a !== ageRange);
    
    setSelectedAgeRanges(newAgeRanges);
    onFiltersChange({
      categories: selectedCategories,
      priceRange,
      ageRanges: newAgeRanges
    });
  };

  return (
    <Card className="bg-white/80 backdrop-blur-sm border-2 border-pastel-pink/30">
      <CardHeader>
        <CardTitle className="text-bright-pink flex items-center">
          🔍 Filtros
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Categories */}
        <div>
          <Label className="text-sm font-semibold text-gray-700 mb-3 block">
            Categorías
          </Label>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox
                  id={category}
                  checked={selectedCategories.includes(category)}
                  onCheckedChange={(checked) => 
                    handleCategoryChange(category, checked as boolean)
                  }
                />
                <Label htmlFor={category} className="text-sm text-gray-600">
                  {category}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <Label className="text-sm font-semibold text-gray-700 mb-3 block">
            Rango de Precio
          </Label>
          <div className="px-2">
            <Slider
              value={priceRange}
              onValueChange={handlePriceChange}
              max={5000}
              min={0}
              step={100}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        </div>

        {/* Age Ranges */}
        <div>
          <Label className="text-sm font-semibold text-gray-700 mb-3 block">
            Edad Recomendada
          </Label>
          <div className="space-y-2">
            {ageRanges.map((ageRange) => (
              <div key={ageRange} className="flex items-center space-x-2">
                <Checkbox
                  id={ageRange}
                  checked={selectedAgeRanges.includes(ageRange)}
                  onCheckedChange={(checked) => 
                    handleAgeRangeChange(ageRange, checked as boolean)
                  }
                />
                <Label htmlFor={ageRange} className="text-sm text-gray-600">
                  {ageRange}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}