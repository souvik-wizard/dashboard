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

export interface ChartData {
    month: string;
    value: number;
  }

  export interface ChartDataProps {
    data: ChartData[];
  }

  export interface Metrics {
    active_users: {
      current: number;
      total: number;
    };
    questions_answered: number;
    average_session_length_seconds: number;
    starting_knowledge_percentage: number;
    current_knowledge_percentage: number;
  }
  
  export interface MetricMapping {
    label: string;
    key: keyof Metrics | "knowledge_gain";
    isNested?: boolean;
    format?: (value: any) => string;
    graph?: string;
  }
  
  export interface MetricsProps {
    metrics: Metrics;
  }
  
  