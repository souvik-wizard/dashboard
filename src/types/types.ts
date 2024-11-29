export interface BaseLeaderboardEntry {
    accuracy_percentage: number;
    previous_accuracy_percentage: number;
  }
  
  export interface UserLeaderboardEntry extends BaseLeaderboardEntry {
    name: string;
    image: string;
    points: number;
  }
  
  export interface GroupLeaderboardEntry extends BaseLeaderboardEntry {
    group_name: string;
    points_per_user: number;
  }
  
  export interface LeaderboardProps<T extends BaseLeaderboardEntry> {
    title: string;
    data: T[];
    type: 'user' | 'group';
  }
  
 export interface SingleSelectionDropdownOption {
    id: string;
    label: string;
  }
  
 export interface SingleSelectionDropdownProps {
    title:string;
    options: SingleSelectionDropdownOption[];
    defaultSelected?: string;
    onSelect?: (option: SingleSelectionDropdownOption) => void;
  }

 export interface MultiSelectionDropdownOption {
    id: string;
    label: string;
    count?: number;
  }
  
 export interface Section {
    title: string;
    options: MultiSelectionDropdownOption[];
  }
  
 export interface MultiSelectionDropdownProps {
    sections: Section[];
    onSelectionChange?: (selections: string[]) => void;
  }