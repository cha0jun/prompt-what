"use client"

import * as React from "react"


import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function Categories() {
  const [category, selectCat] = React.useState("category")

  return (
      <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{category}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup value={category} onValueChange={selectCat}>
          <DropdownMenuRadioItem value="test scripts">test scripts</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="code generation">code generation</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="user stories">user stories</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>

  );
}

// is there a better way to design this so that value will be the actual id? do i need a separate function to return label?