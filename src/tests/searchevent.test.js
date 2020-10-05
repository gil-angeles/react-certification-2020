import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import Toolbar from '../components/Toolbar/Toolbar';

describe("fire-event examples", () => {
    it("updates search box on typing", () => {
      render(<BrowserRouter> <Toolbar /> </BrowserRouter> );
  
      const input = screen.getByRole("textbox");
  
      fireEvent.change(input, { target: { value: "holi" } });
  
      expect(screen.getByDisplayValue("holi")).toBeTruthy();
    });
  
  });
